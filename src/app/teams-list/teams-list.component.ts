import {Component} from '@angular/core';
import {TeamsListService} from "./teams-list.service";

@Component({
  selector: 'teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent {

  /**
   * The list of already entered teams.
   */
  public teams: string[] = [];

  constructor(teamsListService: TeamsListService) {
    this.teams = teamsListService.teams;
  }

  public removeTeam(team: string)
  {
    const index = this.teams.indexOf(team);
    this.teams.splice(index, 1);
  }
}
