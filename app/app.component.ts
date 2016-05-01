import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home.component';
import {NavbarComponent} from './navbar.component';
import {PostsComponent} from './posts.component';
import {UsersComponent} from './users.component';

@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersComponent
    },
    {
        path: '/posts',
        name: 'Posts',
        component: PostsComponent
    },
    {
        path: '/*other', // wildcard route, with redirect
        name: 'Other',
        redirectTo: ['Home']
    }
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {
}