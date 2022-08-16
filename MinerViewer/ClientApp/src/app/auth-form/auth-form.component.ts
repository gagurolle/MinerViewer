import { Component, OnInit } from '@angular/core';
import { auth } from './auth-send.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  constructor(public a: auth) { }

 public name: string | undefined;

 values = '';
 login = '';
 password = '';

  ngOnInit(): void {
  }

  ngOnModelChange(){
    console.log("asd");
  }

  OnKeyLogin(value: string) {
    this.login = value;
  }

  OnKeyPassword(value: string) {
    this.password = value;
  }

  Submit(){

    this.a.postClientCredentionals().subscribe(x => console.log(x));
    console.log(this.login);
  }

}
