import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AlbumsComponent} from './albums.component';
import {AlbumComponent} from './album.component';
import {ArchivesComponent} from './archives.component';
import {ArchiveComponent} from './archive.component';
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
    // so /event/1 would drop into EventComponent route :id.
    {
        path: '/archives',
        name: 'Archives',
        component: ArchivesComponent,
        useAsDefault: true
    },
    {
        path: '/archives/:year/:month',
        name: 'Archive',
        component: ArchiveComponent
    },
    {
        path: '/albums',
        name: 'Albums',
        component: AlbumsComponent
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
        path: '/*other', // wildcard route, with redirect
        name: 'Other',
        redirectTo: ['Archives']
    }
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
}