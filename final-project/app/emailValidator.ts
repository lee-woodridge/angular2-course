import {Control, ControlGroup} from 'angular2/common';

// Validators return either null if they pass
// or {<validationRule>: <value>} if they fail.

export class EmailValidator {
    static emailCheck(control: Control) {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(control.value.length > 0) {
            let valid = re.test(control.value);
            console.log(control.value, valid);
            if(!valid) {
                return {
                    emailCheck: {
                        emailCheck : valid
                    }
                }
            }
        }
        return null;
    }

}