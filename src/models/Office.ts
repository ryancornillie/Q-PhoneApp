/**
 * Created by ryancornillie on 1/21/17.
 */

import  { Session } from './Session';
import { User } from './User';

class Office {

    public location: string;
    public name: string;
    public description: string;
    public sessions: Session[];
    public queue: User[];
    public miniQueue: string[];
    public createdAt: Date;
    public updatedAt: Date;

    constructor(office: Object) {
        this.location = office['location'];
        this.name = office['name'];
        this.description = office['description'];
        this.sessions = office['session'];
        this.queue = office['queue'];
        this.miniQueue = office['miniQueue'];
        this.createdAt = office['createdAt'];
        this.updatedAt = office['updatedAt'];
    }
}


export { Office };