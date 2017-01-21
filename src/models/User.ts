/**
 * Created by ryancornillie on 1/21/17.
 */

import { Office } from './Office';

class User {

    public id: string;
    public name: string;
    public email: string;
    public picture_url: string;
    public offices: Office[];
    public createdAt: Date;
    public updatedAt: Date;

    constructor(user: Object) {
        this.id = user['id'];
        this.name = user['name'];
        this.email = user['email'];
        this.picture_url = user['picture_url'];
        this.offices = user['offices'];
        this.createdAt = user['createdAt'];
        this.updatedAt = user['updatedAt'];
    }
}


export { User };
