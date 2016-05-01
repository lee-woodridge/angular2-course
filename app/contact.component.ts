import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    constructor(private _router: Router) {

    }

    onSubmit(form){
        console.log(form);
        // Below is code which controls the router, navigating to Albums on form submission.
        // This is called imperative or programmatic navigation.
        this._router.navigate(['Albums']);
    }

    // Lifetime hook for when the router tries to navigate away from the component.
    // Used for example when a user tries to nav away from a form with information in.
    routerCanDeactivate(next, previous) {
        // We don't have a form object in the component as we're using template driven
        // forms. To do dirty checking we need model driven form and do something like:
        // if (this.form.dirty) {
        return confirm("Are you sure?");
        // }
    }
}