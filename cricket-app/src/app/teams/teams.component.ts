import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TeamService } from './team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teamList = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamList= this.teamService.teams;
  }
  
  onTeamAdded(team: string){
    this.teamList.push(team);
  }

}
