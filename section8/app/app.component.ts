import {Component} from 'angular2/core';
import {SignUpFormComponent} from './signup-form.component'
import {ChangePasswordComponent} from './change-password.component'

@Component({
    selector: 'my-app',
    directives: [SignUpFormComponent, ChangePasswordComponent],
    template: `
        <signup-form></signup-form>
        <br/>
        <br/>
        <br/>
        <change-password></change-password>
    `
})
export class AppComponent {
}