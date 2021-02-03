import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {TeamsListService} from '../teams-list/teams-list.service';
import {Team} from '../teams-list/Team';

@Component({
  selector: 'app-setup-teams',
  templateUrl: './setup-teams.component.html',
  styleUrls: ['./setup-teams.component.scss']
})
export class SetupTeamsComponent {

  /**
   * The list of already entered teams.
   */
  public teams: Team[];

  public newTeamName = '';

  constructor(private router: Router,
              teamsListService: TeamsListService) {
    this.teams = teamsListService.teams;
  }

  public addTeam(): void
  {
    if (!this.newTeamName || this.newTeamName.trim().length === 0)
    {
      this.newTeamName = '';
      return;
    }
    const newTeam = new Team(this.newTeamName);
    this.teams.push(newTeam);
    this.newTeamName = '';
  }

  public startDrawing(): void
  {
    this.router.navigateByUrl('/draw').catch();
  }

  public isStartButtonDisabled(): boolean
  {
    return this.teams.length === 0;
  }
}
