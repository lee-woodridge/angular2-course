import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `
        <!-- Hiding a div by binding to the hidden attribute -->
        <!-- This creates the div and hides it if true -->
        <div [hidden]="courses.length==0">
            Courses
        </div>
        <!-- Hiding a div by using the ngIf directive -->
        <!-- This does not create the div at all if false -->
        <div *ngIf="courses.length==0">
            You have no courses yet.
        </div>
        `,
    directives: []
})

export class AppComponent {
    courses: string[] = [];
}