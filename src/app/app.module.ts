import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './master/mainpage/mainpage.component';
import { CresetComponent } from './master/creset/creset.component';
import { CregisterComponent } from './master/cregister/cregister.component';
import { EloginComponent } from './master/elogin/elogin.component';
import { JobapplicationComponent } from './master/jobapplication/jobapplication.component';
import { HomeComponent } from './webpage/home/home.component';
import { FruitsComponent } from './webpage/fruits/fruits.component';
import { VeggiesComponent } from './webpage/veggies/veggies.component';
import { ProvisionsComponent } from './webpage/provisions/provisions.component';
import { ApplianceComponent } from './webpage/appliance/appliance.component';
import { BillingComponent } from './webpage/billing/billing.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    CresetComponent,
    CregisterComponent,
    EloginComponent,
    JobapplicationComponent,
    HomeComponent,
    FruitsComponent,
    VeggiesComponent,
    ProvisionsComponent,
    ApplianceComponent,
    BillingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
