import {Component} from '@angular/core';
import {Events} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {UserData} from '../../providers/user-data';
import {TabsPage} from '../tabs/tabs';

/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {


    constructor(
        public userData: UserData,
        public events: Events,
        public navCtrl: NavController
    ) {
    }

    ionViewDidLoad() {

        // Check if the user is logged in
        this.userData.hasLoggedIn()
            .then((hasLoggedIn) => {
                console.log('loged in: ' + hasLoggedIn);
                if (hasLoggedIn) {
                    this.navCtrl.push(TabsPage);
                } else {
                    console.log('else!!');
                }
            });
    }

    login() {

        this.userData.login().then(
            (success) => {
                console.log('succesffully logged in');
                this.navCtrl.push(TabsPage);
                return success;
            },
            (err) => {
                console.log('err: ' + err);
            }
        );

    }

}
