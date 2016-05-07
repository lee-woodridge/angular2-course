import {PasswordValidators} from './passwordValidators';

import {Component} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder} from 'angular2/common';

@Component({
    selector: 'change-password',
    templateUrl: 'app/change-password.component.html'
})
export class ChangePasswordComponent {
    // Using form builder.
    form: ControlGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            // three args: default, validators, async validators.
            current_password: ['', Validators.required],
            new_password: ['', Validators.compose([
                Validators.required,
                PasswordValidators.complexityCheck
            ])],
            confirm_password: ['', Validators.compose([
                Validators.required,
                PasswordValidators.complexityCheck
            ])]
        },
        {
            validator: PasswordValidators.passwordsShouldMatch
        });
    }

    signup() {
        // check is password = "1234", if not set error
        if(this.form.value.current_password != "1234") {
            this.form.find('current_password').setErrors({
                incorrect: true
            });
        } else {
            alert("Password changed");
        }
        console.log(this.form.value);
    }
}