/**
 * Created by zacharyrosenthal on 1/21/17.
 */
import {Injectable} from '@angular/core';


import {Storage} from '@ionic/storage';

import * as fetch from 'isomorphic-fetch';

@Injectable()
export class HttpClient {

    private baseUrl: String;

    constructor(private storage: Storage) {
        this.baseUrl = 'http://35.20.60.69:8888';
    }

    /*createAuthorizationHeader(headers: Headers): Promise<any> {
     // return this.authDataProvider.getToken();
     }
     */


    post(url: string, data: Object) {

        return this.sendData(url, data, 'POST');
    }

    patch(url: string, data: Object) {

        return this.sendData(url, data, 'PATCH');
    }

    delete(url: string, data: Object) {

        return this.sendData(url, data, 'DELETE');
    }

    sendData(url: string, data: Object, action: string): Promise<any> {

        let headers = new Headers();

        headers.append('Content-Length', '16384');
        headers.append('Content-type', 'application/json');

        let requestInit: RequestInit = {
            method: action,
            body: JSON.stringify(data),
            headers: headers
        };


        return fetch(this.baseUrl + url, requestInit).then(
            res => res.json(),
            error => error
        ).then(
            json => json,
            error => error
        );
    }


    get(url: string): Promise < any > {

        //let token: String = this.storage.get('auth_token');

        return fetch(this.baseUrl + url, {method: 'GET'})
            .then(
                (res: any) => {

                    console.log('**RES** ' + JSON.stringify(res));
                    return res.json()
                },
                (error: any) => error
            );
    }

    getAuth(url: string): Promise < any > {

        return this.storage.get('auth_token').then(
            (token) => {

                let options = {method: 'GET', headers: {'Authorization': token}};

                return fetch(this.baseUrl + url, options)
                    .then(
                        (res: any) => {

                            console.log('**RES** ' + JSON.stringify(res));
                            return res.json()
                        },
                        (error: any) => error
                    );
            },
            (err) => err
        )

    }
}