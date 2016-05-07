import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'pager',
    template: `
        <nav>
            <ul class="pagination">
                <!-- left arrow -->
                <li [class.disabled]="currentPage==1">
                    <a
                        aria-label="Previous"
                        (click)="prevNext(true)">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <!-- numbers -->
                <li
                    *ngFor="#page of pageArray"
                    [class.active]="page==currentPage">
                    <a (click)="pageChange(page)">{{ page }}</a>
                </li>
                <!-- right arrow -->
                <li [class.disabled]="currentPage==numPages">
                    <a
                        aria-label="Next"
                        (click)="prevNext(false)">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    `
})

export class PaginationComponent implements OnInit {
    @Input() numPages: number = 5;
    @Output('page-change') event: EventEmitter<number> = new EventEmitter();
    pageArray: number[];
    currentPage: number = 1;

    constructor() {
    }

    ngOnInit() {
        this.pageArray = Array.apply(0, Array(this.numPages)).map((x,i)=>i+1);
    }

    prevNext(prev: boolean) {
        if(prev && (this.currentPage == 1)) {
            return;
        }
        if(!prev && (this.currentPage == this.numPages)) {
            return;
        }
        let newPage = prev ? (this.currentPage-1) : (this.currentPage+1);
        this.pageChange(newPage);
    }

    pageChange(page: number) {
        this.currentPage = page;
        this.event.emit(page);
    }
}


