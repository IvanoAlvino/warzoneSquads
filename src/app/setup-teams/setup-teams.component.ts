import { Component } from '@angular/core';

@Component({
  selector: 'app-setup-teams',
  templateUrl: './setup-teams.component.html',
  styleUrls: ['./setup-teams.component.scss']
})
export class SetupTeamsComponent {

  /**
   * The list of already entered teams.
   */
  public teams: string[] = ["Bwonu Nkolou", "Ughinese", "Cercinelgrano"];

  public newTeamName: string = "";

  constructor() { }

  public addTeam(): void
  {
    this.teams.push(this.newTeamName);
    this.newTeamName = "";
  }

}
