import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloginComponent } from './master/clogin/clogin.component';
import { CregisterComponent } from './master/cregister/cregister.component';
import { CresetComponent } from './master/creset/creset.component';
import { EloginComponent } from './master/elogin/elogin.component';
import { JobapplicationComponent } from './master/jobapplication/jobapplication.component';
import { MainpageComponent } from './master/mainpage/mainpage.component';
import { ApplianceComponent } from './webpage/appliance/appliance.component';
import { BillingComponent } from './webpage/billing/billing.component';
import { FruitsComponent } from './webpage/fruits/fruits.component';
import { HomeComponent } from './webpage/home/home.component';
import { ProvisionsComponent } from './webpage/provisions/provisions.component';
import { VeggiesComponent } from './webpage/veggies/veggies.component';

const routes: Routes = [
  {path:'' ,component:CloginComponent},
  {path:'login' ,component:CloginComponent},
  {path:'registration' ,component:CregisterComponent},
  {path:'reset' ,component:CresetComponent},
  {path:'elogin',component:EloginComponent},
  {path:'jobapply',component:JobapplicationComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'appliance',component:ApplianceComponent},
  {path:'billing',component:BillingComponent},
  {path:'fruits',component:FruitsComponent},
  {path:'home',component:HomeComponent},
  {path:'provisions',component:ProvisionsComponent},
  {path:'veggies',component:VeggiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
