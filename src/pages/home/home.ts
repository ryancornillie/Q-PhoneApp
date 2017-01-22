import {Component} from '@angular/core';

import {Office} from '../../models/Office';

import {UserData} from '../../providers/user-data';
import {DataProvider} from '../../providers/data-provider';
import {setDOM} from "@angular/platform-browser/src/dom/dom_adapter";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    uName: string;
    pictureUrl: string;
    offices: Office[];
    userId: string;

    constructor(public userData: UserData, public dataProvider: DataProvider) {
    }

    ionViewDidLoad() {

        this.setData();
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        this.setData().then(
            success => refresher.complete(),
            error => refresher.cancel()
        );
    }


    setData() {

        let promises = [
            this.userData.getName().then(
                (value) => {
                    this.uName = value;
                },
                err => err
            ),
            this.userData.getPictureUrl().then(
                (value) => {
                    this.pictureUrl = value;
                },
                err => err
            ),
            this.userData.getUserId().then(
                (value) => {
                    this.userId = value;
                },
                err => err
            ),
            this.dataProvider.getOffices().then(
                (success) => {
                    this.offices = success;
                },
                err => err
            )
        ];

        return Promise.all(promises);

    }


    leaveQueue(userId, office) {

        let index = office.queue.indexOf(userId);

        if (index > -1) {

            this.dataProvider.leaveQueue(userId, office._id).then(
                (success) => {
                    office.queue.splice(index, 1);
                    office.joined = 0;
                },
                err => err
            );
        }

    }


    joinQueue(userId, office) {

        this.dataProvider.joinQueue(userId, office._id).then(
            (success) => {
                office.joined = 1;
                office.queue.push(userId);
            },
            err => err
        );

    }

}
