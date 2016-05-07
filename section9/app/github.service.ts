import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import {Profile} from './profile';

@Injectable()
export class GithubService {
    private _url = "https://api.github.com/users/";

    constructor(private _http: Http) {

    }

    getProfile(user: string) : Observable<Profile> {
        var userObservable = this._http
            .get(this._url + user)
            .map(res => res.json());
        var followersObservable = this._http
            .get(this._url + user + "/followers")
            .map(res => res.json());

        return Observable.forkJoin(userObservable, followersObservable)
            .map(res => {
                return {
                    user: res[0],
                    followers: res[1]
                };
            });
    }
}