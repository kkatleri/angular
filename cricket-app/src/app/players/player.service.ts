import { Player } from '../shared/player.model';

export class PlayerService {

    players = [];

    addPlayer(player: Player) {
        this.players.push(player);
    }

    getPlayersByTeamId(teamId: number){
       let teamPlayers = [];
       for(var player of this.players){
           if(player.teamId == teamId) {
               teamPlayers.push(player);
           }
       }
       return teamPlayers;
    }

    removePlayer(player: Player){
        this.players.splice(player.id-1,1);
    }
}