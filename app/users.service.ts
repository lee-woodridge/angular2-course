import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {User} from './user';

@Injectable()
export class UsersService {
    private _url = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) {
    }

    getUsers() : Observable<User[]> {
        return this._http.get(this._url).map(res => res.json());
    }
}