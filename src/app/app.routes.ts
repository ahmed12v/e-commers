import { BrandComponent } from './layout/pages/brand/brand.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { CatogriesComponent } from './layout/pages/catogries/catogries.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegesterComponent } from './layout/pages/regester/regester.component';
import { NotfoundComponent } from './layout/addtions/notfound/notfound.component';
import { ProuductComponent } from './layout/pages/prouduct/prouduct.component';
import { gardGuard } from './shared/athunotcation/gaurds/gard.guard';

export const routes: Routes = [
    {path:"", redirectTo:'regest',pathMatch:'full' },
    {path:'home' ,component:HomeComponent , canActivate:[gardGuard]},
    {path:'proud' ,component:ProuductComponent ,canActivate:[gardGuard]},
    {path:'cart' ,component:CartComponent ,canActivate:[gardGuard]},
    {path:'catogries' ,component:CatogriesComponent ,canActivate:[gardGuard]},
    {path:'brand' ,component:BrandComponent ,canActivate:[gardGuard]},
    {path:'login' ,component:LoginComponent},
    {path:'regest' ,component:RegesterComponent},
    {path:'**' ,component:NotfoundComponent}
];
