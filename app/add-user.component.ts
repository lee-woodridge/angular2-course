import {Component} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder} from 'angular2/common';
import {CanDeactivate} from 'angular2/router';

import {EmailValidator} from './emailValidator';

@Component({
    selector: 'add-user',
    templateUrl: './app/add-user.component.html'
})

export class AddUserComponent implements CanDeactivate {
    form: ControlGroup;

    constructor(private _fb: FormBuilder) {
        this.form = _fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, EmailValidator.emailCheck])],
            phone: [],
            address: _fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    submit() {
        console.log(this.form);
    }

    routerCanDeactivate() {
        if(this.form.dirty) {
            return confirm('Are you sure?');
        }

        return true;
    }
}