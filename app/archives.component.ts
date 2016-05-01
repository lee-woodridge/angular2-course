import {Component} from 'angular2/core';
// import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
// import {PhotoService} from './photo.service';

@Component({
    template: `
        <h1>Archives</h1>
        <ul>
            <li *ngFor="#archive of archives">
                <a [routerLink]="['Archive', archive]"> <!-- second array value is route parameter -->
                    {{ archive.year }}/{{ archive.month }}
                </a>
            </li>
        </ul>
    `,
    // providers: [PhotoService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class ArchivesComponent {
    archives = [
        {
            year: "2016",
            month: "1"
        },
        {
            year: "2016",
            month: "2"
        },
        {
            year: "2016",
            month: "3"
        }
    ]

    constructor(){
    }
}