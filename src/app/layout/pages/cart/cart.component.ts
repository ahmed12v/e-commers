import { Component, OnInit } from '@angular/core';
import { StandDataService } from '../../../stand-data.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  constructor(  ){
    console.log('hi clint');
    

  }
  ngOnInit(): void {
    

    if(typeof localStorage != 'undefined'){
      localStorage.setItem('currentPage','/cart')
    }
  }

}
