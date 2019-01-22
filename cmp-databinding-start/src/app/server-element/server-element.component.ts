import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // get element reference which is being projected by the parent to this component
  @ContentChild('contenPara') paragraph: ElementRef;

  // @input allows a property to be accessible to a parent component (which implements via selector)
  // in other words, we're passing data from parent to the child component thats why the name is input
  @Input()
  // element must be an object
  element: {type: string, name: string, content: string}; 

  constructor() { }

  ngOnInit() {
  }

}
