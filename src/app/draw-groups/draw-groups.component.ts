import { Component } from '@angular/core';
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
  public groups: Group[] = [];

  constructor(private route: ActivatedRoute,
              teamsListService: TeamsListService) {
    const halfLength = Math.ceil(teamsListService.teams.length / 2);
    this.teamsFirstHalf = teamsListService.teams.splice(0, halfLength);
    this.teamsSecondHalf = teamsListService.teams;
  }
}
