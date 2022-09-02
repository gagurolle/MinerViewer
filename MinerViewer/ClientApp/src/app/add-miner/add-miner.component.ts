import { Component, NgModule, OnInit } from '@angular/core';
import { MinerAdress } from '../Data/miner';
import { addMinerService } from './add-miner.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table' 

@Component({
  selector: 'app-add-miner',
  templateUrl: './add-miner.component.html',
  styleUrls: ['./add-miner.component.css'],
  providers:[MatTableDataSource]
})

export class AddMinerComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Ip'];
  
  public minerAdress: MinerAdress[] = [];
  dataSource = this.minerAdress;
  constructor(public a: addMinerService) { }

  ngOnInit(): void {

    this.a.getShowMiners().subscribe(x => this.minerAdress = x);
  }

  values = '';
 ip = '';
 id:number = 0;

  OnKeyId(value: string) {
    this.id = +value;
  }

  OnKeyIp(value: string) {
    this.ip = value;
  }

  Submit(){

    this.a.postClientCredentionals(this.id, this.ip).subscribe(x => {this.a.getShowMiners().subscribe(x => this.minerAdress = x)}, error => {console.log(error);alert(error)});
  }
}
