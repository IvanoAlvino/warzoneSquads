import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TeamsListService} from "../teams-list/teams-list.service";
import {Group} from "./Group";

@Component({
  selector: 'draw-groups',
  templateUrl: './draw-groups.component.html',
  styleUrls: ['./draw-groups.component.scss']
})
export class DrawGroupsComponent {
  /**
   * The first half of the list of teams.
   */
  public teamsFirstHalf: string[] = [];

  /**
   * The second half of the list of teams.
   */
  public teamsSecondHalf: string[] = [];

  /**
   * The groups where the {@link teams} will be distributed.
   */
  public groups: Group[] = [new Group(), new Group()];

  private randomizedTeams: string[] = [];

  private currentGroup: number = 0;

  constructor(private route: ActivatedRoute,
              private teamsListService: TeamsListService) {
    const clonedTeams  = Object.assign([], teamsListService.teams);
    const halfLength = Math.ceil(clonedTeams.length / 2);
    this.teamsFirstHalf = clonedTeams.splice(0, halfLength);
    this.teamsSecondHalf = clonedTeams;
    this.currentGroup = 0;
    this.randomizedTeams = this.shuffle(this.teamsFirstHalf.concat(this.teamsSecondHalf));
  }

  public drawNewTeamInGroup(): void
  {
    const randomTeam = this.randomizedTeams.shift();
    this.groups[this.currentGroup].teams.push(randomTeam);
    this.currentGroup = (this.currentGroup + 1) % this.groups.length;
  }

  public shuffle(teams: string[]): string[]
  {
    let currentIndex = teams.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = teams[currentIndex];
      teams[currentIndex] = teams[randomIndex];
      teams[randomIndex] = temporaryValue;
    }

    return teams;
  }
}
