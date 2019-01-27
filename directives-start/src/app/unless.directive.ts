import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgIf } from '@angular/common';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // making a custom directive which is opposite of NgIf, i.e. displays a tempalte if condition is false
  
  @Input()
  set appUnless(condition: boolean) {
    
    if(!condition){
      // add template reference to the view
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.vcRef.clear();
    }

  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef ) { }

}
