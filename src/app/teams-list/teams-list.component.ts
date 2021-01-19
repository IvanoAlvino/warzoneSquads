import {Component, Input} from '@angular/core';

@Component({
  selector: 'teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent {

  /**
   * The list of already entered teams.
   */
  @Input()
  public teams: string[] = [];

  constructor() { }

  public removeTeam(team: string)
  {
    const index = this.teams.indexOf(team);
    this.teams.splice(index, 1);
  }
}
