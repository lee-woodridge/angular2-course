import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {SpinnerComponent} from './spinner.component';
import {User} from './user';
import {UsersService} from './users.service';

@Component({
    selector: 'users',
    template: `
        <h1>Users</h1>
        <spinner [visible]="isLoading"></spinner>
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
                    <td>
                        <a [routerLink]="['EditUser', {id: user.id}]">
                            <i class="glyphicon glyphicon-edit"></i>
                        </a>
                    </td>
                    <td>
                        <i (click)="deleteUser(user)"
                            class="glyphicon glyphicon-remove clickable">
                        </i>
                    </td>
                </tr>
            </table>
        </div>
    `,
    providers: [UsersService],
    directives: [ROUTER_DIRECTIVES, SpinnerComponent]
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

    deleteUser(user: User) {
        confirm('Are you sure?');
        let i = this.users.indexOf(user);
        this.users.splice(i, 1);
        this._userService
            .deleteUser(user)
            .subscribe(res => console.log('delete success', res),
                err => {
                    this.users.splice(i, 0, user);
                    alert('Delete failed!');
                }
            );
    }
}