import { Component } from '@angular/core';

import { HttpClient } from '../../providers/http-client';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public http: HttpClient) {

  }


}
