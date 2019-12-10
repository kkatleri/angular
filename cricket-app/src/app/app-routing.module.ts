import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { PlayersComponent } from './players/players.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'teams', component: TeamsComponent, children: [
      { path: ':id', component: TeamDetailsComponent}
    ]},
    { path: 'players', component: PlayersComponent},
  ];
  

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ] 
})
export class AppRoutingModule {
}