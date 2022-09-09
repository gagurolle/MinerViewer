import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MinerAdress } from '../Data/miner';

@Injectable({
  providedIn: 'root',
})
export class addMinerService {

  constructor(public http: HttpClient,  @Inject('URL') public baseUrl: string) {
   }

   public postClientCredentionals(id:number, ip:string):Observable<string>{
    return this.http.post<string>(this.baseUrl + 'api/addMiner', {id:id, ip:ip})
  }

  public getShowMiners():Observable<MinerAdress[]>{
    return this.http.get<MinerAdress[]>(this.baseUrl + 'api/showMiners')
  }

  public deleteMiner(miner:MinerAdress):Observable<object>{
    return this.http.get<object>(this.baseUrl + `api/deleteMiner?ip=${miner.ip}&id=${miner.id}`)
  }
}

