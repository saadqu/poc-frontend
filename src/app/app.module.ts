import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDataComponent } from './data/add-data/add-data.component';
import { ViewDataComponent } from './data/view-data/view-data.component';
import { DataComponent } from './data/data/data.component';
import { DataService } from './http-services/data.service';

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
