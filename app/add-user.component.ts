import {Component, Injectable} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder} from 'angular2/common';
import {Router, CanDeactivate} from 'angular2/router';

import {EmailValidator} from './emailValidator';
import {UsersService} from './users.service';

@Component({
    selector: 'add-user',
    templateUrl: './app/add-user.component.html',
    providers: [UsersService]
})

@Injectable()
export class AddUserComponent implements CanDeactivate {
    form: ControlGroup;

    constructor(private _fb: FormBuilder,
        private _usersService: UsersService,
        private _router: Router) {
        this.form = _fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, EmailValidator.emailCheck])],
            phone: [],
            address: _fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    submit() {
        this._usersService.addUser(this.form.value)
            .subscribe(
                res => console.log("res", res),
                err => console.error(err),
                () => {
                    console.log("complete");
                    this._router.navigate(['Users']);
                });
    }

    routerCanDeactivate() {
        if(this.form.dirty) {
            return confirm('Are you sure?');
        }

        return true;
    }
}