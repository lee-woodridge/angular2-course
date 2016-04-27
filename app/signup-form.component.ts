import {UsernameValidators} from './usernameValidators';

import {Component} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder} from 'angular2/common';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    // Manual building.
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });

    // Using form builder.
    form: ControlGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            // three args: default, validators, async validators.
            username: ['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace,
            ]), UsernameValidators.shouldBeUnique],
            password: ['', Validators.required]
        });
    }

    signup() {
        console.log(this.form.value);
    }
}