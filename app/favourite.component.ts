// My second implementation of the task in Section 3 after hints.

import {Component, Input} from 'angular2/core'

@Component({
    selector: 'favourite',
    template: `
            <i class='glyphicon'
                [class.glyphicon-star]="isFavourite"
                [class.glyphicon-star-empty]="!isFavourite"
                (click)="isFavourite = !isFavourite">
            </i>
        `
})

export class FavouriteComponent {
    // Export the isFavourite variable as is-favourite.
    // Can leave input argument blank to export as current name. 
    @Input('is-favourite') isFavourite: boolean = false;
}