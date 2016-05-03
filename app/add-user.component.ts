import {Component} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder} from 'angular2/common';

@Component({
    selector: 'add-user',
    templateUrl: './app/add-user.component.html'
})

export class AddUserComponent {
    form: ControlGroup;

    constructor(private _fb: FormBuilder) {
        this.form = _fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
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
}