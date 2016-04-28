/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
    `
})
export class AppComponent {
    constructor(){
    }
}