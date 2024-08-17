import { Brands } from './brands';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor( private _HttpClient:HttpClient ) {

   }
   getBrands():Observable <Brands>
   {
     return this._HttpClient.get<Brands>('https://ecommerce.routemisr.com/api/v1/brands');
   }
}
