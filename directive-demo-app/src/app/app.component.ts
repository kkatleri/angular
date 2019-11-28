import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-demo-app';
  onlyOdd: boolean = true;
  oddNumbers = [1,3,5];
  evenNumbers = [2,4]
  switchValue = 10;

  toggleNumbers(){
    this.onlyOdd = !this.onlyOdd
  }
}
