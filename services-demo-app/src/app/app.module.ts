import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountComponent } from './account/account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggingService, AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
