import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AlbumsComponent} from './albums.component';
import {AlbumComponent} from './album.component';
import {ContactComponent} from './contact.component';

@RouteConfig([
    // These routes are all complete, but for using domain routing we
    // could delegate a route by ending path with ..., for example:
    // {
    //     path: '/event/...',
    //     component: EventComponent
    // }
    // would delegate anything after /event/ to EventComponent,
    // which would contain a route like:
    // {
    //     path: '/:id'
    // }
    {
        path: '/albums',
        name: 'Albums',
        component: AlbumsComponent,
        useAsDefault: true
    },
    {
        path: '/albums/:id', // :id is route parameter
        name: 'Album',
        component: AlbumComponent
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactComponent
    },
    {
        path: '/*other',
        name: 'Other',
        redirectTo: ['Albums']
    }
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
}