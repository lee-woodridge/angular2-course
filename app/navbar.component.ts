import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: './app/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {
    constructor(private _router: Router) {
    }

    isActive(route: string) {
        var instruction = this._router.generate([route]);
        return this._router.isRouteActive(instruction);
    }
}