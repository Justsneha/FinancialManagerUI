import { Component, OnInit } from '@angular/core';
import { Factoryclass } from '../factoryclass';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceLogicService } from '../service-logic.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css']
})
export class ApplicantDetailsComponent implements OnInit {
  public factoryobject= new Factoryclass();

  constructor(private router:Router,private route:ActivatedRoute,private serviceobj:ServiceLogicService) {
  }

  ngOnInit(): void {
  }

  routetoloanrequestpage()
  {
    this.router.navigate(['./LoanRequest']);
  }

}
