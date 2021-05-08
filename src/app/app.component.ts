import { Component } from "@angular/core";

@Component({
  selector: "wsb-root",
  template: `
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
    </div>
  <wsb-navigation></wsb-navigation>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  public title: string = "Sandwich Shop";
}
