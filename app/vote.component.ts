import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'vote',
    template: `
        <div class="voter">
            <div>
                <i class='glyphicon glyphicon-chevron-up'
                    [style.color]="upVoted ? 'orange' : '#ccc'"
                    (click)="onClick(true)">
                </i> 
            </div>
            {{ voteCount }}
            <div>
                <i class='glyphicon glyphicon-chevron-down'
                    [style.color]="downVoted ? 'orange' : '#ccc'"
                    (click)="onClick(false)">
                </i>
            </div>
        </div>
    `,
    styles: [`
        .voter {
            width: 20px;
            text-align: center;
        }

        .glyphicon {
            cursor: pointer;
        }
    `]
})

export class VoteComponent {
    @Input('input-votes') voteCount: number = 0;
    @Input('up-voted') upVoted: boolean = false;
    @Input('down-voted') downVoted: boolean = false;

    @Output() change = new EventEmitter();

    onClick(upvote: boolean) {
        if(upvote && !this.downVoted) {
            this.upVoted ? this.voteCount-- : this.voteCount++;
            this.upVoted = !this.upVoted;
        } else if(!upvote && !this.upVoted) {
            this.downVoted ? this.voteCount++ : this.voteCount--;
            this.downVoted = !this.downVoted;
        }
        this.change.emit({
            newVoteCount: this.voteCount,
            upVoted: this.upVoted,
            downVoted: this.downVoted
        });
    }
}