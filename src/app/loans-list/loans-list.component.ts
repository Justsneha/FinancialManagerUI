import { Component, OnInit } from '@angular/core';
import { Factoryclass } from '../factoryclass';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceLogicService } from '../service-logic.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.css']
})
export class LoansListComponent implements OnInit {
  
 
  headers = ["Bank", "Tenure", "ProcessingFee", "EMI"];

  rows: any= [
    {
      "Bank" : "Bank A",
      "Tenure" : "5Y",
      "ProcessingFee" : "0.25%",
      "EMI" : "138.8$",
    },
    {
      "Bank" : "Bank B",
      "Tenure" : "5Y",
      "ProcessingFee" : "0.5%",
      "EMI" : "83.38$",
    },
    {
      "Bank" : "Bank A",
      "Tenure" : "5Y",
      "ProcessingFee" : "0.3%",
      "EMI" : "85.8$",
    },
  ];
  constructor(private router:Router,private route:ActivatedRoute,private serviceobj:ServiceLogicService) { }

  ngOnInit(): void {
  }

  routetofinalpage()
  {
    this.router.navigate(['./FinalPage']);
  }

}
