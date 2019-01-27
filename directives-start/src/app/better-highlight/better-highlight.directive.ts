import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // making colors to set dynamically
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  // an even easier way to bind directive w/ an element property. 
  // Just provide the property of element you want to bind with in hostbinding method
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elmentRef: ElementRef, private renderer: Renderer2) { }

  // we use renderer because it provides a much better approach to style an element
  // i.e. without explicitly selecting the element's property like this.elementRef.nativeElement.style.backgroundColor
  
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // setStyle(elementRef, style-property, value-for-property, flag-object(optional))
    // this.renderer.setStyle(this.elmentRef.nativeElement, 'background-color', 'blue');
  }

  // Attaching our directive with a built in events, i.e. mouseenter and mouseleave
  @HostListener('mouseenter') anyMETHODNAME(eventData: Event){
    // this.renderer.setStyle(this.elmentRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor= this.highlightColor;  //using hostbinding
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elmentRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor= this.defaultColor;  //using hostbinding
  }

}
