import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { Storage } from '@ionic/storage';
import {FBAuthService} from '../providers/fb-auth-service';
import {HttpClient} from '../providers/http-client';
import {UserData} from '../providers/user-data';
import {DataProvider} from "../providers/data-provider";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
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
    TabsPage,
    LoginPage,
  ],
  providers: [UserData, Storage, FBAuthService, HttpClient, DataProvider, {provide: ErrorHandler, useClass: IonicErrorHandler}]

})
export class AppModule {
}
