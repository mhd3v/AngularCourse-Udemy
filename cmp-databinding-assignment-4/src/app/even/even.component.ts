import { Component, OnInit, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styles: [`p {
    color: red;
  }`]
})
export class EvenComponent implements OnInit {

  @Input() number:number;

  @ContentChild('contenPara') paragraph: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

}
