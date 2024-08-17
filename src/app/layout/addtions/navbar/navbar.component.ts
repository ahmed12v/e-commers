import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LogService } from '../../../shared/athunotcation/atho/log.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  constructor(public _LogService:LogService  , public _Router:Router){

  }

  loging:boolean=false;

ngOnInit(): void {
  this._LogService.UserDataAfterDecoded.subscribe(()=>{
    if(this._LogService.UserDataAfterDecoded.getValue() != null){
      this.loging=true;
    }
    else{
      this.loging=false;
    }
  })

}
logOut(){

  localStorage.removeItem('userToken');
  this._LogService.UserDataAfterDecoded.next(null);
  this._Router.navigate(['login'])
}

}
