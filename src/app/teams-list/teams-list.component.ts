import {Component} from '@angular/core';
import {TeamsListService} from "./teams-list.service";
import {Team} from "./Team";

@Component({
  selector: 'teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent {

  /**
   * The list of already entered teams.
   */
  public teams: Team[] = [];

  constructor(teamsListService: TeamsListService) {
    this.teams = teamsListService.teams;
  }

  /**
   * Remove the given teamToRemove from the list of teams.
   * @param teamToRemove The team to remove
   */
  public removeTeam(teamToRemove: Team)
  {
    const index = this.teams.indexOf(teamToRemove);
    this.teams.splice(index, 1);
  }
}
