import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
    selector: 'authors',
    template: `
        <h2>{{ title }}</h2> <!-- Interpolation -->
        <!-- For loop printing authors -->
        <ul>
            <li *ngFor="#author of authors">{{ author }}</li>
        </ul>
        
        <!-- if isActive == true, button gets active class -->
        <button [class.active]="isActive">Class binding</button>
        
        <!-- if isActive == true, backgroundColor is set to green, o.w. red -->
        <button [style.backgroundColor]="isActive ? 'green' : 'red'">Style binding</button>
        
        <!-- when button is clicked, call onClick method with event --> 
        <button (click)="onClick($event)">Event binding</button>
        
        <!-- events bubble up, so first button click method, then div method -->
        <div (click)="onDivClick()">
            <button (click)="onClick($event)">Bubble up</button>
        </div>
        
        <!-- cancel bubbling up in onClickOnly -->
        <div (click)="onDivClick()">
            <button (click)="onClickOnly($event)">Don't bubble up</button>
        </div> 
        `,
    providers: [AuthorService]
})

export class AuthorsComponent {
    title: string = "Authors";
    isActive: boolean = true;
    authors;
    
    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
    
    onClick($event) {
        console.log($event);
    }
    
    onDivClick() {
        console.log("div click");
    }
    
    onClickOnly($event) {
        $event.stopPropagation();
        console.log("click only");
    }
}