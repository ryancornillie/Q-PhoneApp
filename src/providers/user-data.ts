import {Injectable} from '@angular/core';

import {Events} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import * as jwt from 'jwt-decode';

import {FBAuthService} from './fb-auth-service';

@Injectable()
export class UserData {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(public events: Events,
              public storage: Storage,
              private FBAuth: FBAuthService) {
  }


  login(username: string) {


    this.FBAuth.login().then(
        (token) => {

          console.log('*****TOKEN: ' + token);

          this.storage.set('auth_token', token);

          let data = jwt(token);

          console.dir(data);

          this.storage.set(this.HAS_LOGGED_IN, true);
          //should get user data from backend
          this.setUsername('needREalOne');
          //this.events.publish('user:login');
          console.log('*****TOKEN: ' + JSON.stringify(token));
        },
        (err) => {
          console.log(JSON.stringify(err));
        }
    );

  };

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username: string) {
    this.storage.set('username', username);
  };

  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

}
