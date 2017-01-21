/**
 * Created by ryancornillie on 1/21/17.
 */

class Session {

    public day: string;
    public start_time: string;
    public end_time: string;
    public active: boolean;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(session: Object) {
        this.day = session['day'];
        this.start_time = session['start_time'];
        this.end_time = session['end_time'];
        this.active = session['active'];
        this.createdAt = session['createdAt'];
        this.updatedAt = session['updatedAt'];
    }
}

export { Session };
