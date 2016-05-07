import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favourite',
    template: `
        <i class='glyphicon'
            [class.glyphicon-star]="isFavourite"
            [class.glyphicon-star-empty]="!isFavourite"
            (click)="onClick()">
        </i>
    `,
    // Adding styles. This does not leak into other components!
    // inline
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `],
    // external - creates another request
    styleUrls: []
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