
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bases } from '../../../bases/baseUrl';
import { regesterData } from '../intrfaces/data';

@Injectable({
  providedIn: 'root'
})
export class AthoService {

  constructor(private _HttpClientt:HttpClient) {}
  

  signUp(data:regesterData):Observable<any>
  {
      return this._HttpClientt.post(`${bases.baseurl}/api/v1/auth/signup` , data)
  }

  
      

   

}
