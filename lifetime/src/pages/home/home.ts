import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import {PlanService} from '../../services/planservice';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  private planDetailForm : FormGroup;
  private planservice;

  constructor(private navController: NavController,
    private http:Http, private formBuilder: FormBuilder) {
      this.planservice = new PlanService(this.http);

      this.planDetailForm = this.formBuilder.group({
        monthlyWithdrawal: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
        yearsInvesting: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
      });
  }

  plan(planDetail) {
    this.planservice.plan(planDetail).subscribe(
      data => {
        if(data) {
          this.navController.push('PlaninfoPage', {
            result: data.text()
          });
        }
      },
      err => console.error(err)
    );
  }

  planAlt(planDetail) {
    this.navController.push('PlaninfoPage', {
      result: this.planservice.planAlt(planDetail)
    });
  }

}
