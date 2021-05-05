import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SandwichFormComponent } from './sandwich-form/sandwich-form.component';
import { SandwichListComponent } from './sandwich-list/sandwich-list.component';

import { RouterModule,Routes } from '@angular/router';
import { SandwichDetailsComponent } from './sandwich-details/sandwich-details.component';

const routes: Routes = [
  {path:'sandwiches', component: SandwichListComponent},
  {path:'sandwiches/:id', component: SandwichDetailsComponent},
  {path: 'sandwiches/form', component: SandwichFormComponent},
  
]

@NgModule({
  declarations: [
    SandwichFormComponent,
    SandwichListComponent,
    SandwichDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
    
  ],
  exports: [
    SandwichFormComponent,
    SandwichListComponent
  ]
})
export class SandwichModule { }
