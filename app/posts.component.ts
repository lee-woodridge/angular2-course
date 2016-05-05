import {Component, OnInit} from 'angular2/core';

import {Post} from './post';
import {PostsService} from './posts.service';

@Component({
    selector: 'posts',
    template: `
        <h1>Posts</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div *ngIf="!isLoading" class="row">
            <div class="col-md-6">
                <ul class="list-group">
                    <li
                        *ngFor="#post of posts"
                        class="list-group-item">
                        {{ post.title }}
                    </li>
                </ul>
            </div>
        </div>
    `,
    providers: [PostsService]
})

export class PostsComponent {
    isLoading: boolean = true;
    posts: Post[];

    constructor(private _postService: PostsService) {
    }

    ngOnInit() {
        this._postService
            .getPosts()
            .subscribe(posts => {
                this.isLoading = false;
                this.posts = posts;
                console.log(posts);
            });
    }
}