import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';

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
        </vote>`,
    directives: [FavouriteComponent, LikeComponent, VoteComponent]
})

export class AppComponent {
    examplePost = {
        title: "The Title",
        isFavourite: true,
        likes: 10,
        liked: false
    }
    
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