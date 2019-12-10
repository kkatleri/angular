import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TeamService } from 'src/app/teams/team.service';
import { PlayerService } from '../player.service';
import { Player } from 'src/app/shared/player.model';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  @ViewChild("playerNameInput", {static: true}) playerNameInput: ElementRef;
  @ViewChild("playerSkillInput", {static: true}) playerSkillInput: ElementRef;
  @ViewChild("playerTeamInput", {static: true}) playerTeamInput: ElementRef;

  teams = [];

  constructor(private teamService: TeamService, private playerService: PlayerService) { }

  ngOnInit() {
    this.teams = this.teamService.teams;
  }

  onAdd(){

    console.log("New player details recieved - " 
        + this.playerNameInput.nativeElement.value + ", "
        + this.playerSkillInput.nativeElement.value + ", "
        + this.playerTeamInput.nativeElement.value );

        this.playerService.addPlayer(
          new Player(
            this.playerService.players.length+1,
            this.playerNameInput.nativeElement.value,
            this.playerSkillInput.nativeElement.value,
            this.playerTeamInput.nativeElement.value
        ));
  }

}
