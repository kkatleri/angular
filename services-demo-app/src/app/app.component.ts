import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'services-demo-app';

  constructor(private accountsService: AccountsService){}
  
  accounts: {name: string, status:string}[]=[];

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }


}
