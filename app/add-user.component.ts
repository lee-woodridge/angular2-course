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
            phone: ['', Validators.required],
            address: _fb.group({
                street: ['', Validators.required],
                suite: ['', Validators.required],
                city: ['', Validators.required],
                zipcode: ['', Validators.required]
            })
        });
    }

    submit() {
        console.log(this.form);
    }
}