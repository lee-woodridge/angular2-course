import {Component} from 'angular2/core';
import {Control, ControlGroup, Validators} from 'angular2/common';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    form = new ControlGroup({
        username: new Control('', Validators.required),
        password: new Control('', Validators.required)
    });

    signup() {
        console.log(this.form.value);
    }
}