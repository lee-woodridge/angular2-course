import {Control} from 'angular2/common';

// Validators return either null if they pass
// or {<validationRule>: <value>} if they fail.
export class UsernameValidators {
    static cannotContainSpace(control: Control) {
        if(control.value.indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            };
        }
        return null;
    }
}