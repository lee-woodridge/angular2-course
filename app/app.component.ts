import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavouriteComponent} from './favourite.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>THE TOP TITLE</h1>
        <courses></courses>
        <authors></authors>
        <br/>
        <favourite></favourite>`,
    directives: [CoursesComponent, AuthorsComponent, FavouriteComponent]
})
export class AppComponent { }