import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
// constant array of providers for HTTP, so we don't have to include
// everything http is dependant on for dependancy injection in providers.
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'my-app',
    directives: [],
    template: `
    `,
    // PostService needs to be injected, which is dependent on http.
    providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
    constructor(private _postService: PostService) { // injected with PostService.
    }

    // Implement OnInit, so this is run after constructor.
    ngOnInit() {
        this._postService.getPosts()
            .subscribe(posts => console.log(posts));
    }
}