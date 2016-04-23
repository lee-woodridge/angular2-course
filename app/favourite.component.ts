// My second implementation of the task in Section 3 after hints.

import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favourite',
    // now importing template from html file.
    templateUrl: 'app/favourite.template.html' 
})

export class FavouriteComponent {
    // Export the isFavourite variable as is-favourite.
    // Can leave input argument blank to export as current name. 
    @Input('is-favourite') isFavourite: boolean = false;
    
    // Initialize an event emitter, so users of the component can subscribe.
    // Make sure it is decorated with output.
    @Output() change = new EventEmitter();
    
    onClick() {
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newValue: this.isFavourite }); // emit an event.
    }
}