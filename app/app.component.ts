import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';
import {BootstrapPanelComponent} from './bootstrap.panel.component';
import {SummaryPipe} from './summary.pipe';

@Component({
    selector: 'my-app',
    template: `
        <!-- Hiding a div by binding to the hidden attribute -->
        <!-- This creates the div and hides it if true -->
        <div [hidden]="courses.length==0">
            Courses
        </div>
        <!-- Hiding a div by using the ngIf directive -->
        <!-- This does not create the div at all if false -->
        <div *ngIf="courses.length==0">
            You have no courses yet.
        </div>

        <ul class="nav nav-pills">
            <!-- style as active when selected, and change viewMode variable -->
            <li [class.active]="viewMode == 'map'">
                <a (click)="viewMode = 'map'">Map View</a>
            </li>
            <li [class.active]="viewMode == 'list'">
                <a (click)="viewMode = 'list'">List View</a>
            </li>
        </ul>
        <!-- switch on the variable viewMode -->
        <div [ngSwitch]="viewMode">
            <!-- template is html5: not run/rendered until activated -->
            <!-- ngSwitchWhen is like case from normal switch -->
            <!-- ngSwitchDefault is like the default case statement -->
            <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
            <template [ngSwitchWhen]="'list'">List View Content</template>
        </div>

        <!-- ngFor example showing index as well as course -->
        <ul>
            <li *ngFor="#course of courses, #i = index">
                {{ i+1 }}) {{ course }}
            </li>
        </ul>

        <!-- the * tells angular to generate the li wrapped in a template, like:
        <ul>
            <template ngFor [ngForOf]="courses" #course #i=index>
                <li>{{ i + 1 }}) {{ course }}</li>
            </template>
        </ul>
        -->

        <!-- Built in pipes. -->
        <div>
            {{ example.title | uppercase }}
            <br/>
            {{ example.rating | number }}
            <br/>
            <!-- number parameter: #integer values.#min dec-#max dec points. -->
            {{ example.students | number:'2.2-2' }}
            <br/>
            <!-- currency, no param default to locale, symbol, then format -->
            {{ example.price | currency:'GBP':true:'2.2-2' }}
            <br/>
            <!-- date with pre-defined format, or our own custom -->
            {{ example.releaseDate | date:'shortDate' }}
            <br/>
            {{ example.releaseDate | date:'MMM yyyy' }}
            <br/>
            {{ example | json }}
        </div>

        <!-- Custom pipes. -->
        <div>
            {{ post.title }}
            <br/>
            {{ post.body | summary:'10' }}
        </div>

        <favourite></favourite>

        <!-- Elvis operator: so we can print something which may be null -->
        <div>
            Printing a null object: {{ example.subExample?.title }}
        </div>

        <bs-panel></bs-panel>
        `,
    directives: [FavouriteComponent],
    pipes: [SummaryPipe]
})

export class AppComponent {
    courses: string[] = ['Course 1', 'Course 2', 'Course 3'];
    viewMode;
    example = {
        title: "Course Name",
        rating: 4.9745,
        students: 5981,
        price: 99.95,
        releaseDate: new Date(2016, 3, 1),
        subExample: null
    }
    post = {
        title: "Tutorial for beginners",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum tellus non nibh consequat, ut viverra libero blandit. Vivamus eget elit eu massa rhoncus accumsan. Integer pretium ut ipsum id mattis. Nunc accumsan posuere dolor nec efficitur. In sagittis risus in urna vehicula condimentum. Praesent enim ante, auctor a tempus eget, porttitor sed turpis. Morbi in nunc risus. Vestibulum at ante a tortor semper tincidunt. Aenean sed risus ut nibh pulvinar blandit."
    }

}