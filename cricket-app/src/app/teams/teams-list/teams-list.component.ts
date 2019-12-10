import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from '../team.service';
import { PlayerService } from 'src/app/players/player.service';
import { Player } from 'src/app/shared/player.model';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  

  //@Input() teams = []; //Using EventEmitter
  teams=[]; //Using service


  constructor(private teamService: TeamService, private playerService: PlayerService) { }

  ngOnInit() {
    this.teams = this.teamService.teams;
  }

  removeTeam(id: number){
    //console.log(this.teams[id] + " is being removed.")
    //this.teams.splice(id,1);   //Using EventEmiiter
    
    this.teamService.removeTeam(id);
  }
  
}
