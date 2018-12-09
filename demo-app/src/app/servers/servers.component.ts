import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  //selector : '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "Demo Server";
  serverCreated = false;
  serverList = ['Demo Server-1','Demo Server-2']

  canClear = false;
  userName = "Demo name";
  
  constructor() { 
      setTimeout(()=>{
          this.allowNewServer = true;
      }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverList.push(this.serverName);
    this.serverCreationStatus = "Server " + this.serverName + " was created!!";
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClear(){
    this.userName="";
  }

}
