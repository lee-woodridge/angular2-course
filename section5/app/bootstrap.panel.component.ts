import {Component} from 'angular2/core'

@Component({
    selector: 'bs-panel',
    template: `
        <!-- ng-content allows external use of bs-panel to place html
        markup inside this template. Any html with css class ".heading"
        will be placed inside ng-content -->
        <div class="panel panel-default">
            <div class="panel-heading">
                <ng-content select=".heading"></ng-content>
            </div>
            <div class="panel-body">
                <ng-content select=".body"></ng-content>
            </div>
        </div>
    `
})

export class BootstrapPanelComponent {
}