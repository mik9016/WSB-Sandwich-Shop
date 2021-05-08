import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SandwichModule } from "../app/sandwich/sandwich.module";
import { NavigationComponent } from "../app/navigation/navigation.component";

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule, SandwichModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
