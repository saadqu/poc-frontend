import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDataComponent } from './poc/add-data/add-data.component';
import { ViewDataComponent } from './poc/view-data/view-data.component';
import { DataComponent } from './poc/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddDataComponent,
    ViewDataComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
