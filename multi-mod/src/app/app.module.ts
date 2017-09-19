import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }     from '@angular/core';

import { AppComponent } from './app.component';
import { featureModule }       from './feature/feature.module';
import { sectionModule }       from './section/section.module';

@NgModule({
  imports: [
    BrowserModule,    
    featureModule,
    sectionModule
  ],
  declarations: [
    AppComponent    
  ],  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
