import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Factoryclass } from '../factoryclass';
import { ServiceLogicService } from '../service-logic.service';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit {
  public factoryobject= new Factoryclass();

  constructor(private router:Router,private route:ActivatedRoute,public serviceobj:ServiceLogicService) { }

  ngOnInit(): void {
  }

  routetofinancialinfo()
  {
    this.router.navigate(['./FinancialInfo']);
  }

}
