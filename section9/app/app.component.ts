import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {GithubService} from './github.service';
// constant array of providers for HTTP, so we don't have to include
// everything http is dependant on for dependancy injection in providers.
import {HTTP_PROVIDERS} from 'angular2/http';
import {Profile} from './profile';

@Component({
    selector: 'my-app',
    directives: [],
    styles: [`
        .avatar {
            width:100px;
            height:100px;
        }
    `],
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div *ngIf="!isLoading">
            <h3>@{{ profile.user.login }}</h3>
            <img class="img-circle avatar"
                src="{{ profile.user.avatar_url }}"/>
            <div>
                <h4>Followers</h4>
                <div *ngFor="#follower of profile.followers">
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="img-circle avatar"
                                    src="{{ follower.avatar_url }}"/>
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">{{ follower.login }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    // PostService needs to be injected, which is dependent on http.
    providers: [GithubService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
    isLoading = true;
    profile: Profile;

    constructor(private _githubService: GithubService) { // injected with PostService&GithubService
    }

    // Implement OnInit, so this is run after constructor.
    ngOnInit() {
        this._githubService.getProfile("octocat")
            .subscribe(profile => {
                this.isLoading = false;
                this.profile = profile;
                console.log(profile);
            });
    }
}