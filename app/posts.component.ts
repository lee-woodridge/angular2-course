import {Component, OnInit} from 'angular2/core';

import {Post} from './post';
import {Comment} from './comment';
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
                        class="list-group-item post-master"
                        (click)="selectPost(post)"
                        [class.active]="currentPost==post">
                        {{ post.title }}
                    </li>
                </ul>
            </div>
            <div *ngIf="currentPost" class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">{{ currentPost?.title }}</div>
                    <div class="panel-body">
                        {{ currentPost?.body }}
                        <hr/>
                        <spinner [visible]="isLoadingComments"></spinner>
                        <div class="media" *ngFor="#comment of comments">
                            <div class="media-left">
                                <a href="#">
                                    <img class="media-object thumbnail" src="http://lorempixel.com/80/80/people?random={{ comment.id }}" alt="...">
                                </a>
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">
                                    {{ comment.name }}
                                </h4>
                                {{ comment.body }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .post-master {
            cursor: pointer;
        }
        .post-master:hover {
            background-color: #ecf0f1;
        }
        .post-master.active,
        .post-master.active:hover,
        .post-master.active:focus {
            background-color: #ecf0f1;
            border-color: #ecf0f1;
            color: #2c3e50;
        }

        .thumbnail {
            border-radius: 100%;
        }
    `],
    providers: [PostsService],
    directives: [SpinnerComponent]
})

export class PostsComponent {
    isLoading: boolean = true;
    posts: Post[];
    currentPost: Post;
    comments: Comment[];
    isLoadingComments: boolean = true;

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

    selectPost(post: Post) {
        this.isLoadingComments = true;
        this.currentPost = post;
        this._postService.getCommentsForPost(post)
            .subscribe(comments => {
                this.comments = comments;
                this.isLoadingComments = false;
            })
    }
}