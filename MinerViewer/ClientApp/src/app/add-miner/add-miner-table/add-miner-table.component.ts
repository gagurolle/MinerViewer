import { Component, Input, OnInit } from '@angular/core';
import { addMinerService } from '../add-miner.service';
import { MinerAdress } from '../../Data/miner';

@Component({
  selector: 'app-add-miner-table',
  templateUrl: './add-miner-table.component.html',
  styleUrls: ['./add-miner-table.component.css']
})
export class AddMinerTableComponent implements OnInit {


  @Input()
  public miners:MinerAdress[] = [];


  constructor(public service: addMinerService) { }

  ngOnInit(): void {

    console.log(this.miners);
  }

  ngOnChange(){
    console.log(this.miners);
  }

  deleteMiner(miner: MinerAdress){
    console.log(miner);
    this.service.deleteMiner(miner).subscribe(p =>  this.service.getShowMiners().subscribe(x => {this.miners = x;}));
    
  }

}
