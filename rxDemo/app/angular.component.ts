/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';

import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'angular',
    template: `
        <form [ngFormModel]="form">
            <input type="text" ngControl="search">
        </form>
    `
})

export class AngularComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            search: []
        })

        var search = this.form.find('search');
        search.valueChanges
            .debounceTime(400)
            .map(str => (<string>str).replace(/ /g, '-'))
            .subscribe(x => console.log(x));
    }
}