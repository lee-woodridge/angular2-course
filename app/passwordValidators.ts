import {Control, ControlGroup} from 'angular2/common';

// Validators return either null if they pass
// or {<validationRule>: <value>} if they fail.
export class PasswordValidators {

    static complexityCheck(control: Control) {
        const minLength = 5;

        if(control.value.length > 0 && control.value.length < 5) {
            return {
                complexityCheck: {
                    minLength: minLength
                }
            };
        }
        return null;
    }

    static passwordsShouldMatch(group: ControlGroup) {
        var newPass = group.find('new_password').value;
        var confirmPass = group.find('confirm_password').value;

        if(newPass == '' || confirmPass == '') {
            return null;
        }
        if(newPass != confirmPass) {
            return {
                passwordsShouldMatch: true
            }
        }
        return null;
    }
}