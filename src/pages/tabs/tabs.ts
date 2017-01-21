import { Component, ViewChild } from '@angular/core';

import {Nav} from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';

import { UserData } from '../../providers/user-data';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  //tab3Root: any = ContactPage;
  tab3Root: any = LoginPage;

  @ViewChild(Nav) nav: Nav;

  constructor(public userData: UserData) {

  }

  ionViewDidLoad() {
    // Check if the user is logged in
    this.userData.hasLoggedIn()
        .then((hasLoggedIn) => {
          if (hasLoggedIn) {
            this.nav.setRoot(HomePage, { tabIndex: 1 });
          } else {
            this.nav.setRoot(HomePage, { tabIndex: 3 });
          }
        });
  }
}
