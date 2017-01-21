import { Component } from '@angular/core';

import { HttpClient } from '../../providers/http-client';
import { NavController } from 'ionic-angular';

import {UserData} from '../../providers/user-data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

<<<<<<< HEAD
  uName: String;
  pictureUrl: String;

  constructor(public navCtrl: NavController, public userData: UserData) {}

  ionViewDidLoad() {

      console.log('**did load**');

    this.userData.getName().then(
        (value) => {
          this.uName = value;
          return true;
        },
        err => err
    );

    this.userData.getPictureUrl().then(
        (value) => {
          this.pictureUrl = value;
          return true;
        },
        err => err
    );

    console.log('done');
  }


}
