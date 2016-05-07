import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {TweetComponent} from './tweet.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ examplePost.title }}</h1>
        <i class="glyphicon glyphicon-star"></i>
        <favourite
            [is-favourite]="examplePost.isFavourite"
            (change)="onFavouriteChange($event)">
        </favourite>
        <like
            [initial-likes]="examplePost.likes"
            [start-liked]="examplePost.liked"
            (change)="onLikeChange($event)">
        </like>
        <vote
            [input-votes]="10"
            [up-voted]="false"
            [down-voted]="false"
            (change)="onVoteChange($event)">
        </vote>
        <h2>Tweet test</h2>
        <div style="padding: 5px" *ngFor="#tweet of tweets">
            <tweet [input]="tweet"></tweet>
        </div>
        `,
    directives: [FavouriteComponent, LikeComponent,
        VoteComponent, TweetComponent]
})

export class AppComponent {
    examplePost = {
        title: "The Title",
        isFavourite: true,
        likes: 10,
        liked: false
    }
    
    tweets = [
        {
            name: "Lee Woodridge",
            username: "lee.woodridge",
            imgUrl: "img/test.png",
            tweet: "I did a thing.",
            likes: 0,
            liked: false
        },
        {
            name: "Jennifer Wang",
            username: "most.beautiful.girl",
            imgUrl: "img/test2.png",
            tweet: "I am sleeping on the couch zZz",
            likes: 30,
            liked: true
        }
    ]
    
    onFavouriteChange($event) {
        console.log($event);
    }
    
    onLikeChange($event) {
        console.log($event);
    }
    
    onVoteChange($event) {
        console.log($event);
    }
}