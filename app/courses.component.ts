import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2> <!-- Interpolation -->
        
        <!-- For loop printing authors -->
        <ul>
            <li *ngFor="#course of courses">{{ course }}</li>
        </ul>
        
        <!-- Custom directive autoGrow (resizes on focus/unfocus) -->
        <div>
            <input type="text" autoGrow />
        </div>
        
        <!-- Implement two-way binding manually (inline just for small example) -->
        <div>
            manualBind: {{ manualBind }}
            <input type="text" [value]="manualBind" (input)="manualBind = $event.target.value" />
            <button (click)="manualBind = ''">Clear</button>
        </div>
        
        <!-- Implement two-way binding with ngModel -->
        <div>
            autoBind: {{ autoBind }}
            <input type="text" [(ngModel)]="autoBind" /> <!-- [(ngModel)] == bindon-ngModel -->
            <button (click)="autoBind = ''">Clear</button>
        </div>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title: string = "Courses";
    courses;
    manualBind: string = "starting value";
    autoBind: string = "starting value";
    
    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}