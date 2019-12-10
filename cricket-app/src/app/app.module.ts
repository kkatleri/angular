import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { NewTeamComponent } from './teams/new-team/new-team.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { NewPlayerComponent } from './players/new-player/new-player.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TeamsComponent,
    PlayersComponent,
    NewTeamComponent,
    TeamsListComponent,
    NewPlayerComponent,
    TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
