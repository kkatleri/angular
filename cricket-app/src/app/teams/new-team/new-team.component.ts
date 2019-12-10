import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from 'src/app/shared/team.model';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})
export class NewTeamComponent implements OnInit {

  //@Output() teamAdded = new EventEmitter<string>();

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  onAdd(teamNameInput: HTMLInputElement){
    console.info("New team name recieved - " + teamNameInput.value)
    //Using Event Emmitter
    // this.teamAdded.emit(
    //   teamNameInput.value
    // );

    //Using Service
    this.teamService.addNewTeam(new Team(this.teamService.teams.length+1,teamNameInput.value));
  }

}
