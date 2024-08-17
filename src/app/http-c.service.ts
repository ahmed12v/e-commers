
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from './posts';

@Injectable({
  providedIn: 'root'
})
export class HttpCService {

  constructor(private _HttpClient:HttpClient) {

   }
   getPosts():Observable<post[]>
   {
     
    return this._HttpClient.get<post[]>('https://jsonplaceholder.typicode.com/posts')
   }
}
