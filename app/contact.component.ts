import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent {
    constructor(private _router: Router) {

    }

    onSubmit(form){
        console.log(form);
        // Below is code which controls the router, navigating to Albums on form submission.
        // This is called imperative or programmatic navigation.
        this._router.navigate(['Albums']);
    }
}