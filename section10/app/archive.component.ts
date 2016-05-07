import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    template: `
        <h1>Archive</h1>
        <div>
            {{ year }}/{{ month }}
        </div>
    `
})

export class ArchiveComponent {
    year: string;
    month: string;

    constructor(private _routeParams: RouteParams) {
        this.year = this._routeParams.get("year");
        this.month = this._routeParams.get("month");
    }
}