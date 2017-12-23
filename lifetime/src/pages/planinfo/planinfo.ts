import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-planinfo',
  templateUrl: 'planinfo.html',
})
export class PlaninfoPage {

  private status;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.status = navParams.get('result');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaninfoPage');
  }

}
