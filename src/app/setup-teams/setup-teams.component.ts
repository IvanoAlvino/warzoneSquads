import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TeamsListService} from "../teams-list/teams-list.service";

@Component({
  selector: 'app-setup-teams',
  templateUrl: './setup-teams.component.html',
  styleUrls: ['./setup-teams.component.scss']
})
export class SetupTeamsComponent {

  /**
   * The list of already entered teams.
   */
  public teams: string[];

  public newTeamName: string = "";

  constructor(private router: Router,
              teamsListService: TeamsListService) {
    this.teams = teamsListService.teams;
  }

  public addTeam(): void
  {
    this.teams.push(this.newTeamName);
    this.newTeamName = "";
  }

  public startDrawing(): void
  {
    this.router.navigateByUrl("/draw").catch();
  }
}
