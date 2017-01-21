import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';

import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import { Storage } from '@ionic/storage';

import {FBAuthService} from '../providers/fb-auth-service';
import {HttpClient} from '../providers/http-client';
import {UserData} from '../providers/user-data';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    providers: [UserData, Storage, FBAuthService, HttpClient, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
