import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prouduct',
  standalone: true,
  imports: [],
  templateUrl: './prouduct.component.html',
  styleUrl: './prouduct.component.scss'
})
export class ProuductComponent implements OnInit {
    
  ngOnInit(): void {
    if(typeof localStorage != 'undefined'){
      localStorage.setItem('currentPage','/proud')
    }
  }
}
