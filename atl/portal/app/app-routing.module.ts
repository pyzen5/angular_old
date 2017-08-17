import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDashComponent }   from './dash/user-dash.component';
import { AdminDashComponent }      from './dash/admin-dash.component';
import { MainDashComponent }  from './dash/main-dash.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: MainDashComponent },
    { path: 'userHome',  component: UserDashComponent },
    { path: 'adminHome',  component: AdminDashComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]  
})
export class AppRoutingModule {}
