import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./login.service";

@Component({
  selector: 'login',
  providers: [],
  templateUrl: './login.component.html',
})
 


export class LoginComponent {
public password:string = "mike";
public email:string = "wazowski";
    constructor( 
                 private authService: AuthService, 
                 ) {

    }

    login() {
console.log( "вошли в логин. вот данные: " + this.email + this.password);
        if (this.email && this.password) {
            this.authService.login(this.email, this.password)
                .subscribe(
                    () => {
                        console.log("User is logged in");
                        //this.router.navigateByUrl('/');
                    }
                );
        }
    }
}