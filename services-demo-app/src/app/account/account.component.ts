import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account: {name:string, type: string};
  @Input() id: number;

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
  }

  changeStatusTo(accountNewStatus: string, accountId: number){
    this.accountsService.updateAccount(accountNewStatus, accountId);
  }
}
