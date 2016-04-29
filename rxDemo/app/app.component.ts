/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';

import {JqueryComponent} from './jquery.component';
import {AngularComponent} from './angular.component';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
        <jquery></jquery>
        <br/>
        <br/>
        <angular></angular>
    `,
    directives: [JqueryComponent, AngularComponent]
})

export class AppComponent {
}