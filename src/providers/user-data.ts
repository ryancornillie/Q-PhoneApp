import {Injectable} from '@angular/core';

import {Storage} from '@ionic/storage';
import * as jwt from 'jwt-decode';

import {FBAuthService} from './fb-auth-service';

@Injectable()
export class UserData {
    _favorites: string[] = [];
    HAS_LOGGED_IN = 'hasLoggedIn';
    HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

    constructor(public storage: Storage,
                private FBAuth: FBAuthService) {
    }


    login(): Promise<any> {

        return this.FBAuth.login().then(
            token => this.setUserData(token),
            err => err
        ).then(
            (success) => true,
            (err) => {
                console.log('err: ' + err);
                return err;
            }
        );
    };

    logout(): Promise<any> {
        let promises = [
            this.storage.set(this.HAS_LOGGED_IN, false),
            this.storage.remove('auth_token'),
            this.storage.remove('picture_url'),
            this.storage.remove('name'),
            this.storage.remove('email')
        ];

        return Promise.all(promises).then(values => {
            console.log(values);
        }, reason => {
            console.log(reason)
        });
    };

    setUserData(token) {
        let data = jwt(token);

        let promises = [
            this.storage.set('auth_token', token),
            this.storage.set(this.HAS_LOGGED_IN, true),
            this.storage.set('picture_url', data.picture_url),
            this.storage.set('name', data.name),
            this.storage.set('email', data.email),
            this.storage.set('id', data._id)
        ];

        return Promise.all(promises).then(values => {
            console.log(values);
        }, reason => {
            console.log(reason)
        });
    };

    getName() {
        return this.storage.get('name').then(value => value);
    };

    getEmail() {
        return this.storage.get('email').then(value => value);
    };

    getPictureUrl() {
        return this.storage.get('picture_url').then(value => value);
    };

    getUserId() {
        return this.storage.get('id').then(value => value);
    }

    // return a promise
    hasLoggedIn() {
        return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
            return (value === true);
        });
    };

}
