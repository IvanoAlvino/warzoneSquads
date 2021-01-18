import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  /**
   * The list of already entered teams.
   */
  public teams: string[] = ["Bwonu Nkolou", "Ughinese", "Cercinelgrano"];

  public newTeamName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public addTeam(): void
  {
    this.teams.push(this.newTeamName);
  }

  public removeTeam(team: string)
  {
    const index = this.teams.indexOf(team);
    this.teams.splice(index, 1);
  }
}
