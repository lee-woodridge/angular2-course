import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object tweet-pic" src="{{ input.imgUrl }}" />
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    {{ input.name }}
                    <span class="username">@{{ input.username }}</span>
                </h4>
                {{ input.tweet }}
                <like
                    [initial-likes]="input.likes"
                    [start-liked]="input.liked">
                </like>
            </div>
        </div>
    `,
    styles: [`
        .tweet {
            width: 300px;
            height: 75px;
        }
        .tweet-pic {
            height: 70px;
            width: 70px;
        }
        .username {
            color: #ccc;
        }
    `],
    directives: [LikeComponent]
})

export class TweetComponent {
    @Input('input') input: {
        name: string;
        username: string;
        imgUrl: string;
        tweet: string;
        likes: number;
        liked: boolean;
    };
}