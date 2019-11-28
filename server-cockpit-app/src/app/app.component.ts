import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements=[];
  
  constructor(){
  }

  ngOnInit(){
  }

  onServerAdded(serverData: {name: string, content: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    })
  }

  onBlueprintAdded(blueprintData: {name: string, content: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    })
  }

  onServerNameUpdated(updatedServerName: string){
    this.serverElements[0].name = updatedServerName;
  }

  onServerDeleted(){
    this.serverElements.splice(0,1);
  }

}
