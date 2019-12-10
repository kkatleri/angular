import { Component, Input } from '@angular/core';
import { TeamService } from './teams/team.service';
import { PlayerService } from './players/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TeamService, PlayerService]
})
export class AppComponent {
  title = 'cricket-app';
  loadedFeature = 'Home';
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}