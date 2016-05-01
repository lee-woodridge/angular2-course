import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map'; // add map to Observable, as angular strips it.
import {Post} from './post';

@Injectable()
export class PostService {
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) { // Injected with Http. _ field for private.

    }

    // CORS request.
    // getPostsCORS(): Observable<Post[]> {
    //     var headers = new Headers({
    //         "access-control-request-method": "POST"
    //     });
    //     var options = new RequestOptions({
    //         headers: headers
    //     });
    //     return this._http.get(this._url, options) // note options here
    //         .map(res => res.json());
    // }

    getPosts(): Observable<Post[]> { // set return type for type checking and intellisense.
        return this._http.get(this._url)
            .map(res => res.json());
            // we could return a promise using toPromise()
    }

    // Note: type checking on input from Post interface!
    createPost(post: Post) {
        this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
}