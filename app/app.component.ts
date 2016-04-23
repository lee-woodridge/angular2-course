import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>THE TOP TITLE</h1>
        <favourite></favourite>`,
    directives: [FavouriteComponent]
})
export class AppComponent { }