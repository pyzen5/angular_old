import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent }        from './test.component'
import { HomeComponent }        from './home.component'
import { UserHomeComponent }        from './userhome.component'
import { AdminHomeComponent }        from './adminhome.component'
import { BooksComponent }        from './books.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'userHome',  component: UserHomeComponent },
  { path: 'adminHome',  component: AdminHomeComponent },
  { path: 'books',  component: BooksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
