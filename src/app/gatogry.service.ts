import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catogry } from './catogry';

@Injectable({
  providedIn: 'root'
})
export class GatogryService  {

  constructor(private _HttpClient:HttpClient) {

   }
   
  getCatogry():Observable<catogry>
  {

    return this._HttpClient.get<catogry>('https://ecommerce.routemisr.com/api/v1/categories');

  }
    
    
  
}
