// My initial implementation of the task in Section 3.

import {Component} from 'angular2/core'

@Component({
    selector: 'favourite',
    template: `
            <div (click)="onClick($event)">
                {{ star }}
            </div>
        `
})

export class FavouriteComponent {
    favourite: boolean = false;
    star: string = "☆";
    
    onClick($event) {
        console.log("got event");
        this.favourite = !this.favourite;
        console.log(this.favourite);
        $event.target.textContent = this.favourite ? '★' : '☆';  
    }
}