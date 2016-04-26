import {Component} from 'angular2/core';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html',
    directives: [],
    pipes: []
})

export class SignupFormComponent {
    onSubmit(form) {
        console.log(form);
    }
}