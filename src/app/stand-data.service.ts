import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StandDataService {

  userAge:string='22';
  userName:string="ahmed";

  test(){
    console.log('test');
    
  }

  constructor() { }
}
