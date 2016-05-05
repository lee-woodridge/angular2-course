import {Component, OnInit} from 'angular2/core';

import {Post} from './post';
import {PostsService} from './posts.service';
import {SpinnerComponent} from './spinner.component';

@Component({
    selector: 'posts',
    template: `
        <h1>Posts</h1>
        <spinner [visible]="isLoading"></spinner>
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
    providers: [PostsService],
    directives: [SpinnerComponent]
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