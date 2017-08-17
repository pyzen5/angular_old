import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators }       from '@angular/forms';


@Component({
  selector: 'atl-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]  
})

export class LoginComponent implements OnInit{   
    
  
    ngOnInit(){
        
    }
  
    loginForm = new FormGroup ({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    onLogIn(){        
        
    }
}
