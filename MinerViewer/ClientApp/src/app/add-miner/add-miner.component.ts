import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { MinerAdress } from '../Data/miner';
import { addMinerService } from './add-miner.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table' 
import { AddMinerTableComponent } from './add-miner-table/add-miner-table.component';

@Component({
  selector: 'app-add-miner',
  templateUrl: './add-miner.component.html',
  styleUrls: ['./add-miner.component.css'],
  providers:[MatTableDataSource]
})

export class AddMinerComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Ip'];
  
  public minerAdress: MinerAdress[] = [];
  @ViewChild("cmp")
  minerTable!: AddMinerTableComponent;
  
  constructor(public a: addMinerService) {

   
   }
   ngAfterContentInit(): void{
    this.a.getShowMiners().subscribe(x => {this.minerTable.miners = x;});

   }
  ngOnInit(): void {
    
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
