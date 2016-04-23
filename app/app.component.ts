import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';
import {LikeComponent} from './like.component';

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
        </like>`,
    directives: [FavouriteComponent, LikeComponent]
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
}