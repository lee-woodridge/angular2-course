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

    getUser(id: number) : Observable<User> {
        return this._http.get(this._url + "/" + id).map(res => res.json());
    }

    addUser(user){
        return this._http.post(this._url, JSON.stringify(user))
            .map(res => res.json());
    }

    editUser(user: User){
        return this._http.put(this._url + "/" + user.id, JSON.stringify(user))
            .map(res => res.json());
    }

    deleteUser(user: User) {
        return this._http.delete(this._url + "/" + user.id)
            .map(res => res.json());
    }
}