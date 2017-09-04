import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

// page components
import { HomeComponent } from './home.component';
import { UserHomeComponent } from './userhome.component';
import { AdminHomeComponent } from './adminhome.component';
import { FooterComponent } from './footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar.component';
import { BooksComponent } from './books.component';
import { AppService } from './service/app.service';
import { BookService } from './service/books.service';

import { TestComponent } from './test.component';
import { testService } from './test.service';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    TestComponent,
    HomeComponent,
    UserHomeComponent,
    AdminHomeComponent,
    BooksComponent
  ],
  providers: [
    testService,
    AppService,
    BookService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

