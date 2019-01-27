import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    // square brackets to tell angular that we want to use the directive as an attibute
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

    // ElementRef is provided by angular to us whenever an element uses the directive we create
    constructor(private elementRef: ElementRef){}

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}