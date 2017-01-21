import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Office } from '../../models/Office';

import { UserData } from '../../providers/user-data';
import { DataProvider} from '../../providers/data-provider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  uName: string;
  pictureUrl: string;
  offices: Office[];

  constructor(public navCtrl: NavController, public userData: UserData, public dataProvider: DataProvider) {}

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

    this.dataProvider.getOffices().then(
        (success) => {
          this.offices = success;
          return true;
        },
        err => err
    );

    console.log('done');
  }


}
