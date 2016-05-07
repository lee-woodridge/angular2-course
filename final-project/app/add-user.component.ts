import {Component, Injectable, OnInit} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder} from 'angular2/common';
import {Router, CanDeactivate, RouteParams} from 'angular2/router';

import {EmailValidator} from './emailValidator';
import {UsersService} from './users.service';
import {User} from './user';

@Component({
    selector: 'add-user',
    templateUrl: './app/add-user.component.html',
    providers: [UsersService]
})

@Injectable()
export class AddUserComponent implements CanDeactivate, OnInit {
    form: ControlGroup;
    user: User = {
        name: "",
        email: "",
        phone: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: ""
        }
    }
    title: string;
    id: string;

    constructor(private _fb: FormBuilder,
        private _usersService: UsersService,
        private _router: Router,
        private _routeParams: RouteParams) {
        this.id = this._routeParams.get("id");
        if(this.id) {
            this.title = "Edit User"
        } else {
            this.title = "Add User"
        }
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

    ngOnInit() {
        if(this.id) {
            this._usersService.getUser(parseInt(this.id))
                .subscribe(res => {
                    console.log(res);
                    this.user = res;
                },
                err => {
                    this._router.navigate(['NotFound'])
                });
        }
    }

    submit() {
        if(this.id) {
            this._usersService.editUser(this.user)
                .subscribe(
                    res => {
                        console.log("updated: ", res);
                        this._router.navigate(['Users']);
                    });
        } else {
            this._usersService.addUser(this.form.value)
                .subscribe(
                    res => {
                        console.log("created: ", res);
                        this._router.navigate(['Users']);
                    });
        }
    }

    routerCanDeactivate() {
        if(this.form.dirty) {
            return confirm('Are you sure?');
        }

        return true;
    }
}