import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Factoryclass } from '../factoryclass';
import { ServiceLogicService } from '../service-logic.service';

@Component({
  selector: 'app-financial-info',
  templateUrl: './financial-info.component.html',
  styleUrls: ['./financial-info.component.css']
})
export class FinancialInfoComponent implements OnInit {

  public factoryobject= new Factoryclass();

  constructor(private router:Router,private route:ActivatedRoute,public serviceobj:ServiceLogicService) { }

  ngOnInit(): void {
  }

  routetoloanslist()
  {
    this.router.navigate(['./LoanList']);
  }

}
