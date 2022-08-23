import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class auth {

  constructor(public http: HttpClient,  @Inject('BASE_URL') public baseUrl: string) {
   }

   public postClientCredentionals():Observable<string>{
    return this.http.post<string>(this.baseUrl + 'connect/token', "" )
  }
}

