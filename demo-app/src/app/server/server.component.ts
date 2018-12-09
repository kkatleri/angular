import { Component } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent{

    serverId: Number = 1;
    serverStatus: String = 'offline'

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor(){
        return this.serverStatus == 'online' ? 'green' : 'red';
    }
}