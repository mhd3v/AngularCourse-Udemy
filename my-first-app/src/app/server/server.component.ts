import { Component } from '@angular/core';

// component is basically a class, so we need to export it so that it can be instantiated by angular

// @component is a class decorator, 
@Component({
    // selector must be a unique string
    selector: 'app-server',
    templateUrl: './server.component.html' 
})
export class ServerComponent {

}