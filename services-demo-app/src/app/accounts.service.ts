import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService{

    constructor(private loggingService: LoggingService){}

    accounts = [
        {
          name: "Master Account",
          status: "Active"
        },
        {
          name: "Root Account",
          status: "Inactive"
        }
      ];

      addAccount( name: string, status: string){
        this.accounts.push({name: name, status: status});
        this.loggingService.logNewAccountAdded({name: name, status: status});
      }
    
      updateAccount(newStatus: string, id: number){
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus)
      }
}