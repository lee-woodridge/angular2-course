import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {
    // dependency injection
    constructor(private el: ElementRef, private renderer: Renderer) {
        
    }
    
    onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200'); // 200px  
    }
    
    // when we lose focus.
    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }
}