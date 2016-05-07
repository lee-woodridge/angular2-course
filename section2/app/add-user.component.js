System.register(['angular2/core', 'angular2/common', 'angular2/router', './emailValidator', './users.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, emailValidator_1, users_service_1;
    var AddUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (emailValidator_1_1) {
                emailValidator_1 = emailValidator_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            AddUserComponent = (function () {
                function AddUserComponent(_fb, _usersService, _router, _routeParams) {
                    this._fb = _fb;
                    this._usersService = _usersService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.user = {
                        name: "",
                        email: "",
                        phone: "",
                        address: {
                            street: "",
                            suite: "",
                            city: "",
                            zipcode: ""
                        }
                    };
                    this.id = this._routeParams.get("id");
                    if (this.id) {
                        this.title = "Edit User";
                    }
                    else {
                        this.title = "Add User";
                    }
                    this.form = _fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, emailValidator_1.EmailValidator.emailCheck])],
                        phone: [],
                        address: _fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                AddUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.id) {
                        this._usersService.getUser(parseInt(this.id))
                            .subscribe(function (res) {
                            console.log(res);
                            _this.user = res;
                        }, function (err) {
                            _this._router.navigate(['NotFound']);
                        });
                    }
                };
                AddUserComponent.prototype.submit = function () {
                    var _this = this;
                    if (this.id) {
                        this._usersService.editUser(this.user)
                            .subscribe(function (res) {
                            console.log("updated: ", res);
                            _this._router.navigate(['Users']);
                        });
                    }
                    else {
                        this._usersService.addUser(this.form.value)
                            .subscribe(function (res) {
                            console.log("created: ", res);
                            _this._router.navigate(['Users']);
                        });
                    }
                };
                AddUserComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty) {
                        return confirm('Are you sure?');
                    }
                    return true;
                };
                AddUserComponent = __decorate([
                    core_1.Component({
                        selector: 'add-user',
                        templateUrl: './app/add-user.component.html',
                        providers: [users_service_1.UsersService]
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, users_service_1.UsersService, router_1.Router, router_1.RouteParams])
                ], AddUserComponent);
                return AddUserComponent;
            }());
            exports_1("AddUserComponent", AddUserComponent);
        }
    }
});
//# sourceMappingURL=add-user.component.js.map