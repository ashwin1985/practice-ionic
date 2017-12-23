import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

const BASE_URL = "http://localhost:8000/";

export class PlanService {

  constructor (private http:Http) {}

  plan(details) {
    let body = JSON.stringify(details);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(BASE_URL + "plan", body, options);
  }

  planAlt(details) {
    return "Monthly withdrawal amount " + details.monthlyWithdrawal;
  }

}
