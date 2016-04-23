import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavouriteComponent} from './favourite.component';
import {Favourite2Component} from './favourite2.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>THE TOP TITLE</h1>
        <courses></courses>
        <authors></authors>
        <favourite></favourite>
        <favourite2></favourite2>`,
    directives: [CoursesComponent, AuthorsComponent,
        FavouriteComponent, Favourite2Component]
})
export class AppComponent { }