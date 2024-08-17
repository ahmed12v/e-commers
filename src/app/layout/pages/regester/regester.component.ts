import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AthoService } from '../../../shared/athunotcation/atho/atho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regester',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './regester.component.html',
  styleUrl: './regester.component.scss'
})
export class RegesterComponent  {

   

///////////////////////////////////////////////////////////
  regesterForm:FormGroup= new FormGroup({

    name:new FormControl ( null ,[Validators.required , Validators.maxLength(12) , Validators.minLength(3) ]),
    email:new FormControl( null , [ Validators.required , Validators.email]),
    password:new FormControl( null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{8}$/)]),
    rePassword:new FormControl( null, [Validators.required]),
    phone:new FormControl( null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
    
  }  , this.checkrePassword  )

  constructor(private _AthoService:AthoService , private _Router:Router){}

  checkrePassword(match:AbstractControl){

    if(match.get('password')?.value === match.get('rePassword')?.value ){
         return null ;}

         else{

          match.get('rePassword')?.setErrors({missmatch:true});
          return {missmatch:true};

           
         }
    
  } 
  ////////////////////////////////// shared /////////////////////////////////////////////////////////

   
   spinner:boolean=false
   errorMass !:string;

  SubmitRegester()
  {

    if(this.regesterForm.valid)
      {
        this.spinner=true;
          this._AthoService.signUp(this.regesterForm.value).subscribe({

            next:(res)=>
            {
              this.spinner=false
                     console.log(res);
                     this._Router.navigate(['/login'])
                     
            },
            error:(err)=>
            {
              this.spinner=false
                  console.log(err);
                  this.errorMass=err.error.message ;

                  
            }
          });
    }

  }
//////////////////////////////////////////////////////////////////////////////////////////////

}

