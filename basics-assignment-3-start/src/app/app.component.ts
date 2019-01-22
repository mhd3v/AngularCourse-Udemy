import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .white {
      color: white;
    }
  `]
})
export class AppComponent {
  display = 'block';
  clicks = []

  togglePara(){
    this.clicks.push(new Date());
    this.display === 'block' ? this.display = 'none' : this.display = 'block';
  }

}
