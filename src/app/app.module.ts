import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceLogicService } from './service-logic.service';
import { HttpClientModule } from '@angular/common/http';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { FinancialInfoComponent } from './financial-info/financial-info.component';
import { FinalPageComponent } from './final-page/final-page.component';
import { LoansListComponent } from './loans-list/loans-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    ApplicantDetailsComponent,
    LoanRequestComponent,
    FinancialInfoComponent,
    FinalPageComponent,
    LoansListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [ServiceLogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
