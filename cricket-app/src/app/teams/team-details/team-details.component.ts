import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Player } from 'src/app/shared/player.model';
import { PlayerService } from 'src/app/players/player.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  id: number;
  teamPlayers = [];

  constructor(private route: ActivatedRoute, private playerService: PlayerService) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
          this.id = params['id'];
          this.teamPlayers = this.playerService.getPlayersByTeamId(this.id);
      }
    )
    this.teamPlayers = this.playerService.getPlayersByTeamId(this.id);
   }

  removePlayer(player: Player){
    this.playerService.removePlayer(player);
    this.teamPlayers = this.playerService.getPlayersByTeamId(player.teamId);
  }

}
