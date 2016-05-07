import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'like',
    template: `
        <div>
            <i class='glyphicon glyphicon-heart'
                [class.liked]="liked"
                [style.color]="liked ? 'deeppink' : '#ccc'"
                (click)="onClick()">
            </i>
            {{ likeCount }}
        </div>
    `,
    styles: [`
        .glyphicon-heart {
            cursor: pointer;
        }
    `]
})

export class LikeComponent { 
    @Input('initial-likes') likeCount: number = 0;
    @Input('start-liked') liked: boolean = false;

    @Output() change = new EventEmitter();
    
    onClick() {
        this.liked ? this.likeCount-- : this.likeCount++;
        this.liked = !this.liked; 
        this.change.emit({ newValue: this.likeCount });
    }
}