import {Component} from '@angular/core';

import {Nav} from 'ionic-angular';

import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {LoginPage} from '../login/login';

import {UserData} from '../../providers/user-data';


@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = HomePage;
    tab2Root: any = AboutPage;
    tab3Root: any = LoginPage;

    constructor(
        public userData: UserData,
        public nav: Nav
    ) {

    }

    logout() {
        this.userData.logout().then(
            (success) => this.nav.setRoot(LoginPage),
            (err) => {
                console.log(err);
                return err;
            }
        );
    }
}
