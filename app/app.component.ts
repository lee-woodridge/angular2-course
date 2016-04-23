import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ examplePost.title }}</h1>
        <favourite
            [is-favourite]="examplePost.isFavourite"
            (change)="onFavouriteChange($event)">
        </favourite>`,
    directives: [FavouriteComponent]
})

export class AppComponent {
    examplePost = {
        title: "The Title",
        isFavourite: true
    }
    
    onFavouriteChange($event) {
        console.log($event);
    }
}