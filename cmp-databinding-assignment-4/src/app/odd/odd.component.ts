import { Component, OnInit, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  
  @Input() number:number;

  @ContentChild('contenPara') paragraph: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
