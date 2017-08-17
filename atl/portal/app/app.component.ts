import { DataService } from './app.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [ DataService ]
})

export class AppComponent implements OnInit{
    //constructor(dataService:DataService) {}
    
    ngOnInit(){
        
    }
}
