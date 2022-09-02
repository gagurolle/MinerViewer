import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Miner } from '../Data/miner';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(public http: HttpClient,  @Inject('URL') public baseUrl: string) {
   }

   public getMiner():Observable<Miner[]>{
    return this.http.get<Miner[]>(this.baseUrl + 'api/miners');
  }
}

