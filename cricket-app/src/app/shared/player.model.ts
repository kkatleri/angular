export class Player {

    public id: number;
    public name: string;
    public skill: string;
    public teamId: number;

    constructor(
        id: number,
        name: string,
        skill: string,
        teamId: number
        ){
            this.id = id;
            this.name = name;
            this.skill = skill;
            this.teamId = teamId;
    }
}