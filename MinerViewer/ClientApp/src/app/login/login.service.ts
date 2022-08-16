

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

        

    login(email:string, password:string ) {
        return this.http.post<User>('https://localhost:7116/connect/token', JSON.stringify({client_id: 'company-employee', 
        client_secret: 'codemazesecret', grant_type: 'password', username: email, password: password}), 
        {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}).pipe(map((res) => this.setSession(res)));}
        
          
    private setSession(authResult: any) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.idToken);
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
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    
}