import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { Miner } from '../Data/miner';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.style.css'],
})
export class HomeComponent {

  public ncols: number = 2;
  public data: Miner[] = [];

  constructor(private readonly service: HomeService) {

    service.getMiner().subscribe(x => this.data = x, error => {
      if (error.status == 401) {
        alert("Wrong credentials, please, log in");
      }
    });


    
  }
  Reload(id:number):void{
    console.log(id);
    this.service.getMiner().subscribe(x => this.data = x, error => {
      if (error.status == 401) {
        alert("Wrong credentials, please, log in");
      }
    });

  }
}

