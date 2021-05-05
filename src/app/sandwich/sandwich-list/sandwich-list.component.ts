import { Component, OnInit } from '@angular/core';
import { SandwichService } from '../sandwich.service';

@Component({
  selector: 'wsb-sandwich-list',
  templateUrl: './sandwich-list.component.html',
  styles: [
  ]
})
export class SandwichListComponent implements OnInit {

  public sandwiches = this.sandwichService.getSandwiches();
  
  constructor(private sandwichService: SandwichService) { }

  ngOnInit(): void {
  

  }

}
