/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';

import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
    `
})
export class AppComponent {
    constructor(){
        var keyups = Observable.fromEvent($("#search"), "keyup") // subscribe to keyups.
            .map(e => e.target.value) // map from DOM event to string
            .filter(s => s.length >= 3) // filter for only strings >= 3
            .debounceTime(400) // debounce for 400ms
            .distinctUntilChanged() // call only once per input.
            .flatMap(s => {
                var url = "https://api.spotify.com/v1/search?type=artist&q=" + s;
                var promise = $.getJSON(url); // get the promise from getJSON
                return Observable.fromPromise(promise); // subscribe to the promise
            }); // flatMap flattens our Observable of Observables
            // into an Observable which returns the data.
            // In production, the code inside flatMap should be refactored into a service class.

        var subscription = keyups.subscribe(data => console.log(data));
        // subscription.unsubscribe(); // to stop receiving events.

        // // Create a debouncer, so the max freq we call server is 400ms.
        // var debounced = _.debounce(function(text){
        //     var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
        //     $.getJSON(url, function(artists) {
        //         console.log(artists);
        //     });
        // }, 400);

        // $("#search").keyup(function(e){
        //     var text = e.target.value;

        //     // To not flood server.
        //     if(text.length < 3)
        //         return;

        //     debounced(text);
        // });
    }
}