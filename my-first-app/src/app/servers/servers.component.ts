import { Component, OnInit } from '@angular/core';

@Component({


  selector: 'app-servers',

  //======== different selector styles:
  // [] means we have set a selector as an attribute, so we will need to use it as an attribute in html
  // selector: '[app-servers]',

  // selecting by class:
  // selector: '.app-servers',

  //=================================


  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  // constructor runs whenever the component is created
  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
