import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '../../providers/http-client';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }


}
