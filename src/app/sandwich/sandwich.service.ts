import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sandwich } from './sandwich';

@Injectable({
  providedIn: 'root' //serwis jest dostępny wszędzie w całym projekcie
})
export class SandwichService {
  private url = 'http://localhost:3000/sandwiches';

  constructor(private httpClient: HttpClient) { }

  getSandwiches() {
    return this.httpClient.get(this.url).toPromise();
  }

  getSandwich(sandwichId: string): Promise<Sandwich> {
    return this.httpClient.get<Sandwich>(`${this.url}/${sandwichId}`).toPromise();
  }

  postSandwich(sandwich: Sandwich) {
   return this.httpClient.post(this.url, sandwich).toPromise();
  }

  findSandwiches(query: string,sort: string, order: 'asc' | 'desc') {
    return this,this.httpClient.get(`${this.url}?q=${query}&_sort=${sort}&_order=${order}`).toPromise();
  }

}
