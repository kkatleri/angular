import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'game-control-app';
 
  counterElements=[];

  constructor(){
  }

  ngOnInit(){
  }

  onCounterIncremented(counter: number){
    this.counterElements.push(counter);
  }

  onCounterReset(){
    this.counterElements.splice(0,this.counterElements.length);
  }
}
