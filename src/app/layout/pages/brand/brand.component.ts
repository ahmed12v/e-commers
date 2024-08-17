import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../brand.service';
import { Brands, Datum } from '../../../brands';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss'
})
export class BrandComponent implements OnInit{
  constructor( private _BrandService:BrandService) {
  }

  
  
  brandList!:Datum[];
  ngOnInit(): void {
    this._BrandService.getBrands().subscribe({
      next: (res) =>{
        this.brandList=res.data;
       // console.log(this.brandList)
        
      }
    })
    

    if(typeof localStorage != 'undefined'){
      localStorage.setItem('currentPage','/brand')
    }
      
    
  }

}
