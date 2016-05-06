import {Component, OnInit} from 'angular2/core';

// Post imports.
import {Post} from './post';
import {Comment} from './comment';
import {PostsService} from './posts.service';
// User imports.
import {User} from './user';
import {UsersService} from './users.service';
// Components.
import {SpinnerComponent} from './spinner.component';

@Component({
    selector: 'posts',
    templateUrl: './app/posts.component.html',
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
    providers: [PostsService, UsersService],
    directives: [SpinnerComponent]
})

export class PostsComponent {
    postsLoading: boolean = true;
    posts: Post[];
    usersLoading: boolean = true;
    users: User[];
    currentPost: Post;
    comments: Comment[];
    commentsLoading: boolean = true;
    init: boolean = false;

    constructor(private _postService: PostsService,
        private _userService: UsersService) {
    }

    ngOnInit() {
        this.getPosts();
        this._userService
            .getUsers()
            .subscribe(users => {
                this.usersLoading = false;
                this.users = users;
                this.init = true;
                console.log(users);
            });
    }

    getPosts(id?) {
        this.postsLoading = true;
        if(id) {
            this._postService
                .getPostsForUser(id)
                .subscribe(posts => {
                    this.postsLoading = false;
                    this.posts = posts;
                    console.log(posts);
                });
        } else {
            this._postService
                .getPosts()
                .subscribe(posts => {
                    this.postsLoading = false;
                    this.posts = posts;
                    console.log(posts);
                });
        }
    }

    selectPost(post: Post) {
        this.comments = null;
        this.commentsLoading = true;
        this.currentPost = post;
        this._postService.getCommentsForPost(post)
            .subscribe(comments => {
                this.comments = comments;
                this.commentsLoading = false;
            })
    }

    form(id: string) {
        if(id == "") {
            this.getPosts();
        } else {
            this.getPosts(id);
        }
    }
}