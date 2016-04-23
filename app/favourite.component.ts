// My second implementation of the task in Section 3 after hints.

import {Component} from 'angular2/core'

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
    isFavourite: boolean = false;
}