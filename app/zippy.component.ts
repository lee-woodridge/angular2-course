// My implementation of zippy before looking at instructor implementation.

import {Component, Input} from 'angular2/core'

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading" (click)="onClick()">
                {{ title }}
                <i
                    class="right glyphicon"
                    [ngClass]="{
                        'glyphicon-chevron-down': !open,
                        'glyphicon-chevron-up': open
                    }">
                </i>
            </div>
            <ul class="list-group" *ngIf="open">
                <li class="list-group-item">
                    <ng-content></ng-content>
                </li>
            </ul>
        </div>
    `,
    styles: [`
        .panel-heading {
            cursor: pointer;
        }
        .right {
            float: right;
        }
    `]
})

export class ZippyComponent {
    @Input() title: string = "";
    open: boolean = false;

    onClick() {
        this.open = !this.open;
        console.log(this.open);
    }
}