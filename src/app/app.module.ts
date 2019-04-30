import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Routes,RouterModule} from '@angular/router';

import {FlexLayoutModule} from '@angular/flex-layout';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes : Routes = [
  { path : 'amdemo' , loadChildren : './amdemo/amdemo.module#AMDemoModule'},
  {path : '**', redirectTo : 'amdemo/Fiction'}
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
