import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  counterArray = [];
  intervalRef;
  @Output('gameStarted') onGameStart: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartClicked() {
    this.intervalRef = setInterval(() => {
      this.counterArray.push(++this.counter);
      this.onGameStart.emit(this.counter);
    }, 1000);
  }

  onStopClicked() {
    clearInterval(this.intervalRef);
  }

}