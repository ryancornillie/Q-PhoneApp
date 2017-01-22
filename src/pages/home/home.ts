import {Component} from '@angular/core';

import {UserData} from '../../providers/user-data';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    uName: String;
    pictureUrl: String;

    constructor(public userData: UserData) {
    }

    ionViewDidLoad() {

        this.setData();
    }

    setData() {
        this.userData.getName().then(
            (value) => {
                this.uName = value;
            },
            err => err
        );

        this.userData.getPictureUrl().then(
            (value) => {
                this.pictureUrl = value;
            },
            err => err
        );
    }

}
