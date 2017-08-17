import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { DataService } from './app.service';

import { AppComponent }         from './app.component';

import { LoginComponent }  from './login/login.component';

import { UserDashComponent }   from './dash/user-dash.component';
import { AdminDashComponent }      from './dash/admin-dash.component';
import { MainDashComponent }  from './dash/main-dash.component';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainDashComponent,
    AdminDashComponent,
    UserDashComponent
  ],  
  providers: [ DataService ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
