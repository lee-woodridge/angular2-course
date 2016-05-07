System.register(['angular2/core', './posts.service', './users.service', './spinner.component', './pager.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, posts_service_1, users_service_1, spinner_component_1, pager_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (pager_component_1_1) {
                pager_component_1 = pager_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService, _userService) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this.postsLoading = true;
                    this.numPages = 10;
                    this.usersLoading = true;
                    this.commentsLoading = true;
                    this.init = false;
                    this.filtered = false;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getPosts();
                    this._userService
                        .getUsers()
                        .subscribe(function (users) {
                        _this.usersLoading = false;
                        _this.users = users;
                        _this.init = true;
                        console.log(users);
                    });
                };
                PostsComponent.prototype.getPosts = function (id) {
                    var _this = this;
                    this.postsLoading = true;
                    if (id) {
                        this.filtered = true;
                        this._postService
                            .getPostsForUser(id)
                            .subscribe(function (posts) {
                            _this.postsLoading = false;
                            _this.posts = posts;
                            _this.currentPosts = posts.slice(0, 10);
                            console.log(posts);
                        });
                    }
                    else {
                        this.filtered = false;
                        this._postService
                            .getPosts()
                            .subscribe(function (posts) {
                            _this.postsLoading = false;
                            _this.posts = posts;
                            _this.currentPosts = posts;
                            console.log(posts);
                        });
                    }
                };
                PostsComponent.prototype.selectPost = function (post) {
                    var _this = this;
                    this.comments = null;
                    this.commentsLoading = true;
                    this.currentPost = post;
                    this._postService.getCommentsForPost(post)
                        .subscribe(function (comments) {
                        _this.comments = comments;
                        _this.commentsLoading = false;
                    });
                };
                PostsComponent.prototype.form = function (id) {
                    if (id == "") {
                        this.getPosts();
                    }
                    else {
                        this.getPosts(id);
                    }
                };
                PostsComponent.prototype.changePage = function (event) {
                    event = event - 1;
                    console.log(event);
                    this.currentPosts = this.posts.slice(0 + (10 * event), 10 + (10 * event));
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: './app/posts.component.html',
                        styles: ["\n        .post-master {\n            cursor: pointer;\n        }\n        .post-master:hover {\n            background-color: #ecf0f1;\n        }\n        .post-master.active,\n        .post-master.active:hover,\n        .post-master.active:focus {\n            background-color: #ecf0f1;\n            border-color: #ecf0f1;\n            color: #2c3e50;\n        }\n\n        .thumbnail {\n            border-radius: 100%;\n        }\n    "],
                        providers: [posts_service_1.PostsService, users_service_1.UsersService],
                        directives: [spinner_component_1.SpinnerComponent, pager_component_1.PaginationComponent]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map