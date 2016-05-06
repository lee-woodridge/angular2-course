import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Post} from './post';
import {Comment} from './comment';

@Injectable()
export class PostsService {
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) {
    }

    getPosts() : Observable<Post[]> {
        return this._http.get(this._url).map(res => res.json());
    }

    getPostsForUser(id) : Observable<Post[]> {
        return this._http
            .get(this._url + "?userId=" + id)
            .map(res => res.json());
    }

    getCommentsForPost(post: Post) : Observable<Comment[]> {
        return this._http
            .get(this.getCommentUrl(post))
            .map(res => res.json());
    }

    getCommentUrl(post: Post) : string {
        return this._url + "/" + post.id + "/" + "comments"
    }

    // getUser(id: number) : Observable<User> {
    //     return this._http.get(this._url + "/" + id).map(res => res.json());
    // }

    // addUser(user){
    //     return this._http.post(this._url, JSON.stringify(user))
    //         .map(res => res.json());
    // }

    // editUser(user: User){
    //     return this._http.put(this._url + "/" + user.id, JSON.stringify(user))
    //         .map(res => res.json());
    // }

    // deleteUser(user: User) {
    //     return this._http.delete(this._url + "/" + user.id)
    //         .map(res => res.json());
    // }
}