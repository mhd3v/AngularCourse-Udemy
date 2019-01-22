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
  serverCreated = false;
  serverCreationStatus = 'No server was created';
  serverName = 'two-way-binding';
  
  servers = ['TestServer', 'TestServer 2'];

  // constructor runs whenever the component is created
  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created with name:' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }

}
