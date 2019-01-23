import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  intervalReference;
  currentVal = 0;

  @Output()
  incrementingNumber = new EventEmitter<{val: number}>();

  constructor() { }

  ngOnInit() {
  }

  startEmitting(){
    this.intervalReference = setInterval(() => {
      this.currentVal ++;
      this.incrementingNumber.emit({val: this.currentVal})
    }, 1000);
  }

  stopEmitting(){
    clearInterval(this.intervalReference);
  }

}
