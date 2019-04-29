import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmdemoComponent } from './amdemo.component';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import {Routes,RouterModule} from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import {MaterialModule} from '../shared/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BooklistingComponent } from './components/booklisting/booklisting.component';
import { DataService } from './services/data.service';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { LoansComponent } from './components/loans/loans.component';

const routes : Routes = [
  {path : '' , component : AmdemoComponent,
  children : [
   { path : 'Fiction' , component : BooklistingComponent},
   { path : 'Business' , component : BooklistingComponent},
   { path : 'Finance' , component : BooklistingComponent},
   { path : 'Economics' , component : BooklistingComponent},
   { path : 'Physcology' , component : BooklistingComponent},
   { path : 'Technology' , component : BooklistingComponent},
   { path : 'Law' , component : BooklistingComponent},
   { path : 'Nature' , component : BooklistingComponent},
   { path : 'Polictical Science' , component : BooklistingComponent},
   { path : 'Mathematics' , component : BooklistingComponent},
   { path : 'Travel' , component : BooklistingComponent},
   { path : 'Health & Fitness' , component : BooklistingComponent},
   { path : ':index' , component : MyaccountComponent}
  ]},
  {path : "**" , redirectTo : ''}
];

@NgModule({
  declarations: [ AmdemoComponent, SidenavComponent, ToolbarComponent, BooklistingComponent, MyaccountComponent, LoansComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DataService
  ]
})
export class AMDemoModule { }
