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


    login() {


        this.FBAuth.login().then(
            (token) => {

                console.log('*****TOKEN: ' + token);

                this.storage.set('auth_token', token);

                let data = jwt(token);

                console.dir(data);

                this.storage.set(this.HAS_LOGGED_IN, true);

                this.setUserData(data);
                //this.events.publish('user:login');
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

    setUserData(data) {
        this.storage.set('picture_url', data.picture_url);
        this.storage.set('name', data.name);
        this.storage.set('email', data.email);
    };

    getName() {
        console.log('call');
        return this.storage.get('name').then((value) => {
            console.log('name: ' + value);
            return value;
        });
    };

    getEmail() {
        return this.storage.get('email').then((value) => {
            return value;
        });
    };

    getPictureUrl() {
        return this.storage.get('picture_url').then((value) => {
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
