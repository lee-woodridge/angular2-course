import {Component} from 'angular2/core';

import {ContactFormComponent} from './contact-form.component';
import {SignupFormComponent} from './signup-form.component';

@Component({
    selector: 'my-app',
    template: `
            <contact-form></contact-form>
            <signup-form></signup-form>
        `,
    directives: [ContactFormComponent, SignupFormComponent],
    pipes: []
})

export class AppComponent {
}