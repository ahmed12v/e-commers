import { Component, OnInit } from '@angular/core';
import { HttpCService } from '../../../http-c.service';
import { post } from '../../../posts';
import { AllProudService } from '../../../shared/athunotcation/atho/all-proud.service';
import { viewData } from '../../../shared/athunotcation/intrfaces/all-proud';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private _AllProudService:AllProudService ){
  }
  allProud !:viewData[] ;
  ngOnInit(): void {

    this._AllProudService.allprouduct().subscribe({
      next:(res)=>{
        this.allProud=res.data;
        console.log(this.allProud)
      }

    });
  ``
    if(typeof localStorage != 'undefined'){
      localStorage.setItem('currentPage','/brand')
    }
  }

}
