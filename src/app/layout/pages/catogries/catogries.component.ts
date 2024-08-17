import { Component, OnInit } from '@angular/core';
import { catogry, DatOfCatogry } from '../../../catogry';
import { GatogryService } from '../../../gatogry.service';

@Component({
  selector: 'app-catogries',
  standalone: true,
  imports: [],
  templateUrl: './catogries.component.html',
  styleUrl: './catogries.component.scss'
})
export class CatogriesComponent implements OnInit {

  constructor( private _GatogryService:GatogryService){

  }
  catogryList !:DatOfCatogry[];
  ngOnInit(): void {
    this._GatogryService.getCatogry().subscribe({
      next:(res)=>{
        this.catogryList=res.data;
       // console.log(this.catogryList)
      }
    })

    if(typeof localStorage != 'undefined'){
      localStorage.setItem('currentPage','/catogries')
    }

  }

}
