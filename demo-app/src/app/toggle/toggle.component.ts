import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  toggle = true;
  eventLogs = [];

  constructor() { }

  ngOnInit() {
  }

  onDisplay(){
    this.toggle = !this.toggle ;
    // this.eventLogs.push(this.eventLogs.length+1);
    this.eventLogs.push(new Date())
  }

  getEventColor(){
    return this.eventLogs.length>5 ? 'blue' : 'white';
  }

}
