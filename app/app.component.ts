import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarComponent} from './navbar.component';
import {PostsComponent} from './posts.component';
import {UsersComponent} from './users.component';

@RouteConfig([
    {
        path: '/users',
        name: 'Users',
        component: UsersComponent,
        useAsDefault: true
    },
    {
        path: '/posts',
        name: 'Posts',
        component: PostsComponent
    },
    {
        path: '/*other', // wildcard route, with redirect
        name: 'Other',
        redirectTo: ['Users']
    }
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <router-outlet></router-outlet>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {
}