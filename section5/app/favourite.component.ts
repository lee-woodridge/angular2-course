import {Component} from 'angular2/core'

@Component({
    selector: 'favourite',
    template: `
            <!-- Old version: <i class='glyphicon'
                [class.glyphicon-star]="isFavourite"
                [class.glyphicon-star-empty]="!isFavourite"
                (click)="isFavourite = !isFavourite">
            </i> -->

            <!-- New implementation with ngClass -->
            <i class='glyphicon'
                [ngClass]="{
                    'glyphicon-star': !isFavourite,
                    'glyphicon-star-empty': isFavourite
                }"
                (click)="isFavourite = !isFavourite">
            </i>

            <!-- We can also use ngStyle in a similar way, although
            needing to set multiple styles is normally a sign of using a css class -->
        `
})

export class FavouriteComponent {
    isFavourite: boolean = false;
}