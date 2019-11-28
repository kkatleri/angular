import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  @ViewChild('inputAccountName') accountName: ElementRef;
  @ViewChild('inputAccountStatus') accountStatus: ElementRef;

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
  }

  onAddAccount(){
    this.accountsService.addAccount(this.accountName.nativeElement.value, this.accountStatus.nativeElement.value)
  }

}
