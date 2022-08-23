

import { HttpBackend, HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { User } from "oidc-client";
import { map } from "rxjs";

@Injectable({ providedIn:  'root' })
export class AuthService {
    private http: HttpClient;
    constructor(handler: HttpBackend) { 
        this.http = new HttpClient(handler);}

        

    login(username:string, password:string ) {

        let body = new URLSearchParams();
        body.set('client_id', 'company-employee');
        body.set('client_secret', 'codemazesecret');
        body.set('grant_type', 'password');
        body.set('username',  username);
        body.set('password', password);


        return this.http.post<User>('https://localhost:7116/connect/token', body.toString(), 
        {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}).pipe(map((res) => this.setSession(res)));}
        
          
    private setSession(authResult: any) {
        console.log(authResult);
        const expiresAt = moment().add(authResult.expires_in,'second');
console.log(authResult.access_token);
        localStorage.setItem('id_token', authResult.access_token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        let expiration = localStorage.getItem("expires_at") || "";
        if(expiration == ""){
            return '';
        }
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    
}