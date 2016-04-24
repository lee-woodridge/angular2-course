import {Component} from 'angular2/core'

@Component({
    selector: 'favourite',
    template: `
            <!-- Old version: <i class='glyphicon'
                [class.glyphicon-star]="isFavourite"
                [class.glyphicon-star-empty]="!isFavourite"
                (click)="isFavourite = !isFavourite">
            </i> -->

            <i class='glyphicon'
                [ngClass]="{
                    'glyphicon-star': !isFavourite,
                    'glyphicon-star-empty': isFavourite
                }"
                (click)="isFavourite = !isFavourite">
            </i>
        `
})

export class FavouriteComponent {
    isFavourite: boolean = false;
}