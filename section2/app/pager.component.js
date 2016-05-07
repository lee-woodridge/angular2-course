System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PaginationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PaginationComponent = (function () {
                function PaginationComponent() {
                    this.numPages = 5;
                    this.event = new core_1.EventEmitter();
                    this.currentPage = 1;
                }
                PaginationComponent.prototype.ngOnInit = function () {
                    this.pageArray = Array.apply(0, Array(this.numPages)).map(function (x, i) { return i + 1; });
                };
                PaginationComponent.prototype.prevNext = function (prev) {
                    if (prev && (this.currentPage == 1)) {
                        return;
                    }
                    if (!prev && (this.currentPage == this.numPages)) {
                        return;
                    }
                    var newPage = prev ? (this.currentPage - 1) : (this.currentPage + 1);
                    this.pageChange(newPage);
                };
                PaginationComponent.prototype.pageChange = function (page) {
                    this.currentPage = page;
                    this.event.emit(page);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], PaginationComponent.prototype, "numPages", void 0);
                __decorate([
                    core_1.Output('page-change'), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PaginationComponent.prototype, "event", void 0);
                PaginationComponent = __decorate([
                    core_1.Component({
                        selector: 'pager',
                        template: "\n        <nav>\n            <ul class=\"pagination\">\n                <!-- left arrow -->\n                <li [class.disabled]=\"currentPage==1\">\n                    <a\n                        aria-label=\"Previous\"\n                        (click)=\"prevNext(true)\">\n                        <span aria-hidden=\"true\">&laquo;</span>\n                    </a>\n                </li>\n                <!-- numbers -->\n                <li\n                    *ngFor=\"#page of pageArray\"\n                    [class.active]=\"page==currentPage\">\n                    <a (click)=\"pageChange(page)\">{{ page }}</a>\n                </li>\n                <!-- right arrow -->\n                <li [class.disabled]=\"currentPage==numPages\">\n                    <a\n                        aria-label=\"Next\"\n                        (click)=\"prevNext(false)\">\n                        <span aria-hidden=\"true\">&raquo;</span>\n                    </a>\n                </li>\n            </ul>\n        </nav>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PaginationComponent);
                return PaginationComponent;
            }());
            exports_1("PaginationComponent", PaginationComponent);
        }
    }
});
//# sourceMappingURL=pager.component.js.map