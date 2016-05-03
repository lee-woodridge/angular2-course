import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {User} from './user';
import {UsersService} from './users.service';

@Component({
    selector: 'users',
    template: `
        <h1>Users</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div *ngIf="!isLoading" class="table-responsive">
            <div>
                <a
                    [routerLink]="['AddUser']"
                    class="btn btn-primary">
                    Add User
                </a>
            </div>
            <br/>
            <table class="table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                <tr *ngFor="#user of users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td><i class="glyphicon glyphicon-edit"></i></td>
                    <td><i class="glyphicon glyphicon-remove"></i></td>
                </tr>
            </table>
        </div>
    `,
    providers: [UsersService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})

export class UsersComponent implements OnInit {
    isLoading: boolean = true;
    users: User[];

    constructor(private _userService: UsersService) {
    }

    ngOnInit() {
        this._userService
            .getUsers()
            .subscribe(users => {
                this.isLoading = false;
                this.users = users;
                console.log(users);
            });
    }
}