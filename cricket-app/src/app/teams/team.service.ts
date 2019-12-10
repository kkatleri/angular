import { Team } from '../shared/team.model';

export class TeamService {

    teams = [
        new Team(1, 'Team1'),
        new Team(2, 'Team2'),
    ];

    addNewTeam(team: Team) {
        this.teams.push(team);
        console.log("New team added successfully - " + team.name);
    }

    removeTeam(id: number) {
        let team = this.teams[id];
        this.teams.splice(id,1);
        console.log( team.name +" removed successfully");
    }

}