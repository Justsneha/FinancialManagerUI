import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Factoryclass } from '../factoryclass';
import { ServiceLogicService } from '../service-logic.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {

  public factoryobject= new Factoryclass();

  constructor(private router:Router,private route:ActivatedRoute,public serviceobj:ServiceLogicService) { }

  ngOnInit(): void {
  }

  routetoapplicantdetails()
  {
    this.router.navigate(['./ApplicantDetails']);
  }
}
