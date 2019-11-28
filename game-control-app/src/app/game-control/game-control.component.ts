import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter:number = 0;
  timer;
  @Output() counterIncremented = new EventEmitter<number>();
  @Output() resetCounter = new EventEmitter<number>();

  constructor(){
  }

  ngOnInit(){
  }

  incrementCounter(){
    this.counterIncremented.emit(++this.counter);
  }

  onStart(){
    this.timer = setInterval(() => {
      this.incrementCounter(); 
      }, 1000);
  }

  onStop(){
    this.counter=0
    this.resetCounter.emit();
    clearInterval(this.timer);
  }

}
