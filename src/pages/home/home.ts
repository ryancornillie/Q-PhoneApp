import {Component} from '@angular/core';

import {Office} from '../../models/Office';

import {UserData} from '../../providers/user-data';
import {DataProvider} from '../../providers/data-provider';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    uName: string;
    pictureUrl: string;
    offices: Office[];

    constructor(public userData: UserData, public dataProvider: DataProvider) {
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
