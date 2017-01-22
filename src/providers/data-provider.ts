import { Injectable } from '@angular/core';
import  { HttpClient } from './http-client';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }


  getOffices() {

    let url: string = "/api/v1/offices/";

    return this.http.get(url).then(
        (success) => {
          console.log('success', success);

          return success;
        },
        error => error
    );

  }

}
