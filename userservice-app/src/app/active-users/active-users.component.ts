import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  @Input() user: {name: string, status: string};
  @Input() id: number;

  constructor(private usersService: UsersService,
                private counterService: CounterService) { }

  ngOnInit() {
  }

  setToInactive(id: number){
    this.usersService.updateUserStatus(id, "Inactive");
    this.counterService.incrementInactiveCounter();
  }

}
