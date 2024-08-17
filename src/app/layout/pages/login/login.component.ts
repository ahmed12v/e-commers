import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { LogService } from '../../../shared/athunotcation/atho/log.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent   {

 
  //////////////////////////////////////////////////////////

  loginForm:FormGroup= new FormGroup({

   
    email:new FormControl( null , [ Validators.required , Validators.email]),
    password:new FormControl( null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{8}$/)]),
    
    
  }  )

  constructor(private _LogService:LogService , private _Router:Router){}

  ////////////////////////////////// shared /////////////////////////////////////////////////////////

   
   spinner:boolean=false
   errorMass !:string;

  SubmitLogin()
  {

    if(this.loginForm.valid)
      {
        this.spinner=true;
          this._LogService.sidnIn(this.loginForm.value).subscribe({

            next:(res)=>
            {
              this.spinner=false
                     console.log(res);
                     localStorage.setItem('userToken', res.token)
                     this._LogService.decodToken();
                     this._Router.navigate(['/home'])
                     
            },
            error:(err)=>
            {
              this.spinner=false
                  console.log(err);
                  this.errorMass=err.error.errors.msg ;

                  
            }
          });
    }

  }
//////////////////////////////////////////////////////////////////////////////////////////////
      



}
