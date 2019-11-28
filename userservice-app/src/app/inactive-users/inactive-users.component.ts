import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  @Input() user: {name: string, status: string};
  @Input() id: number;

  constructor(private usersService: UsersService,
              private counterService: CounterService){ }

  ngOnInit() {
  }

  setToActive(id: number){
    this.usersService.updateUserStatus(id, "Active");
    this.counterService.incrementActiveCounter();
  }

}
