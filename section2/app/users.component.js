System.register(['angular2/core', 'angular2/router', './spinner.component', './users.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, spinner_component_1, users_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_userService) {
                    this._userService = _userService;
                    this.isLoading = true;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService
                        .getUsers()
                        .subscribe(function (users) {
                        _this.isLoading = false;
                        _this.users = users;
                        console.log(users);
                    });
                };
                UsersComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    confirm('Are you sure?');
                    var i = this.users.indexOf(user);
                    this.users.splice(i, 1);
                    this._userService
                        .deleteUser(user)
                        .subscribe(function (res) { return console.log('delete success', res); }, function (err) {
                        _this.users.splice(i, 0, user);
                        alert('Delete failed!');
                    });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        template: "\n        <h1>Users</h1>\n        <spinner [visible]=\"isLoading\"></spinner>\n        <div *ngIf=\"!isLoading\" class=\"table-responsive\">\n            <div>\n                <a\n                    [routerLink]=\"['AddUser']\"\n                    class=\"btn btn-primary\">\n                    Add User\n                </a>\n            </div>\n            <br/>\n            <table class=\"table table-bordered\">\n                <tr>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>Edit</th>\n                    <th>Delete</th>\n                </tr>\n                <tr *ngFor=\"#user of users\">\n                    <td>{{ user.name }}</td>\n                    <td>{{ user.email }}</td>\n                    <td>\n                        <a [routerLink]=\"['EditUser', {id: user.id}]\">\n                            <i class=\"glyphicon glyphicon-edit\"></i>\n                        </a>\n                    </td>\n                    <td>\n                        <i (click)=\"deleteUser(user)\"\n                            class=\"glyphicon glyphicon-remove clickable\">\n                        </i>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    ",
                        providers: [users_service_1.UsersService],
                        directives: [router_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map