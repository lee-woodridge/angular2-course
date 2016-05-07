/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from "rxjs/Rx";

import {JqueryComponent} from './jquery.component';
import {AngularComponent} from './angular.component';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
        <jquery></jquery>
        <br/>
        <br/>
        <angular></angular>
    `,
    directives: [JqueryComponent, AngularComponent]
})

export class AppComponent {
    constructor() {
        // Test various forms of Observable.
        console.log("fromArray [1,2,3]");
        var observable = Observable.fromArray([1, 2, 3])
            .subscribe(x => console.log(x));

        console.log("of [1,2,3]");
        observable = Observable.of([1,2,3])
            .subscribe(x => console.log(x));

        console.log("of 1,2,3");
        observable = Observable.of(1,2,3)
            .subscribe(x => console.log(x));

        console.log("empty");
        observable = Observable.empty()
            .subscribe(x => console.log(x));

        console.log("range 1,5");
        observable = Observable.range(1,5)
            .subscribe(x => console.log(x));

        console.log("completion function");
        observable = Observable.of(1)
            .subscribe(
                x => console.log(x),
                err => console.error(err),
                () => console.log("completed")
            );


        // console.log("interval 1000");
        // var interval = Observable.interval(10000)
        //     .flatMap(x => {
        //         // call server
        //         return Observable.of([1,2,3]);
        //     })
        //     .subscribe(x => console.log(x));

        // Simulating error.
        console.log("error handling");
        var errObs = Observable
            .throw(new Error("ahh!"))
            .subscribe(
                x => console.log(x), // success
                err => console.error(err) // error
            );

        // simulate a call which fails twice then succeeds.
        console.log("error handling with retry");
        var counter = 0;
        var ajaxCall = Observable.of('url')
            .flatMap(() => {
                if(++counter < 2)
                    return Observable.throw(new Error("ahh!"));

                return Observable.of([1,2,3]);
            })
            .retry(3)
            .subscribe(x => console.log(x), err => console.error(err));

        console.log("error handling with catch");
        var catchObs = Observable
            .throw(new Error("ahh!"))
            .catch(err => {
                return Observable.of([1,2,3]);
            })
            .subscribe(x => console.log(x));

        console.log("timeout");
        var timeout = Observable
            .of([1,2,3])
            .delay(5000)
            .timeout(100)
            .subscribe(x => console.log(x), err => console.error(err));

        // join two observables. Returns an array of the results
        // [o1.results, o2.results] after both complete. Map to something nicer.
        console.log("forkJoin");
        var o1 = Observable.of({
            userId: 1,
            username: 'something'
        }).delay(2000);
        var o2 = Observable.of([1,2,3]).delay(1500);
        Observable
            .forkJoin(o1,o2)
            .map(data => {
                {
                    return {
                        user: data[0],
                        stream: data[1]
                    };
                }
            })
            .subscribe(x => console.log(x));
    }
}