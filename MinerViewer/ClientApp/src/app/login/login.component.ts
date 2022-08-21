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
    public password: string = "";
    public username: string = "";
    public isLogged:boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    ngOnInit() {
        if(this.authService.isLoggedIn()){
            this.isLogged = true;
        }
      }

    login() {
        console.log("вошли в логин. вот данные: " + this.username + this.password);
        if (this.username && this.password) {
            this.authService.login(this.username, this.password)
                .subscribe(
                    () => {
                        console.log("User is logged in");
                        this.isLogged = true;
                        this.router.navigateByUrl('/');
                    },error => alert("Неверные имя пользователя или пароль")
                    
                );
        }
    }

    logout(){
        this.authService.logout();
        this.isLogged = false;
    }
}