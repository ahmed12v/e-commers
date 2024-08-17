import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Log } from '../intrfaces/log';
import { BehaviorSubject, Observable } from 'rxjs';
import { bases } from '../../../bases/baseUrl';
import { jwtDecode } from "jwt-decode";
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class LogService {

  UserDataAfterDecoded:BehaviorSubject<any>= new BehaviorSubject(null);

  constructor( private _HttpClient:HttpClient , @Inject(PLATFORM_ID) private id:object ) {
    if(isPlatformBrowser(id)){
           
         if(localStorage.getItem('userToken')){
                       this.decodToken();
                      
                       
         }
    }

   }

  sidnIn(data:Log):Observable<any>
  {
       return this._HttpClient.post(`${bases.baseurl}/api/v1/auth/signin`, data)
  }

  decodToken(){
      
    const token = JSON.stringify(localStorage.getItem('userToken'));
const decoded = jwtDecode(token);
       
      this.UserDataAfterDecoded.next(decoded);
    
      


  }

  
}

