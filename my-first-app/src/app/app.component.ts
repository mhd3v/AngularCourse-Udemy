import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  
  // can define the template as follows if the html code won't be too long:
  // template: `<h3>Im the app component</h3>
  // <hr>
  // <app-servers></app-servers>`,

  // styleUrls: ['./app.component.css']
  // can define the styles as follows if the styles won't be too long:
  styles: [
    `h3 {
      color: blue
    }`
  ]

})
export class AppComponent {
}
