import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SucessComponent } from './sucess/sucess.component';
import { ResolverComponent } from './resolver/resolver.component';
import { CreateComponent } from './create/create.component';
import { Qs1Component } from './dashboard/qs1/qs1.component';
import { Qs2Component } from './dashboard/qs2/qs2.component';
import { Qs3Component } from './dashboard/qs3/qs3.component';
import { Qs4Component } from './dashboard/qs4/qs4.component';
import { Qs5Component } from './dashboard/qs5/qs5.component';
import { Qs6Component } from './dashboard/qs6/qs6.component';
import { Qs7Component } from './dashboard/qs7/qs7.component';
import { Qs8Component } from './dashboard/qs8/qs8.component';
import { Qs9Component } from './dashboard/qs9/qs9.component';
import { Qs10Component } from './dashboard/qs10/qs10.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SucessComponent,
    ResolverComponent,
    CreateComponent,
    Qs1Component,
    Qs2Component,
    Qs3Component,
    Qs4Component,
    Qs5Component,
    Qs6Component,
    Qs7Component,
    Qs8Component,
    Qs9Component,
    Qs10Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
