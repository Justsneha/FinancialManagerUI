import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { FinancialInfoComponent } from './financial-info/financial-info.component';
import { FinalPageComponent } from './final-page/final-page.component';
import { LoansListComponent } from './loans-list/loans-list.component';

const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  redirectTo:'InitialPage'
},

{
  path:'InitialPage',
  component:InitialPageComponent,
},

{
  path:'LoanRequest',
  component:LoanRequestComponent,
},

{
  path:'FinancialInfo',
  component:FinancialInfoComponent,
},

{
  path:'FinalPage',
  component:FinalPageComponent,
},

{
  path:'LoanList',
  component:LoansListComponent,
},

{
  path:'ApplicantDetails',
  component:ApplicantDetailsComponent,
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
