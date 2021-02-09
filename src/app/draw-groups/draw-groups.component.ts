import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TeamsListService} from '../teams-list/teams-list.service';
import {Group} from './Group';
import {Team} from '../teams-list/Team';

@Component({
  selector: 'draw-groups',
  templateUrl: './draw-groups.component.html',
  styleUrls: ['./draw-groups.component.scss']
})
export class DrawGroupsComponent {
  /**
   * The first half of the list of teams.
   */
  public teamsFirstHalf: Team[] = [];

  /**
   * The second half of the list of teams.
   */
  public teamsSecondHalf: Team[] = [];

  /**
   * The groups where the {@link teams} will be distributed.
   */
  public groups: Group[] = [];

  /**
   * A copy of the teams array that is randomized.
   */
  public randomizedTeams: Team[] = [];

  /**
   * A reference to the group where the next extracted team will go.
   */
  private currentGroup = 0;

  /**
   * Available names for the groups.
   */
  private groupNames: string[] = ['I Maestri del Gulag', 'El Team de Fuego', 'I King della Corona', 'Poco danno molte Kill',
    'Gli SparaCazzate', 'A pugni nel Gulag', 'I CHEATERS', 'DMR e MAC10', 'Col Pompa nel Bagno',
    'Solo Bandiere', '"Questi mi puzzano"', 'Mi hanno Laserato'];

  constructor(private route: ActivatedRoute,
              private teamsListService: TeamsListService) {
    // Clone the Team array
    const clonedTeams: Team[] = [];
    teamsListService.teams.forEach(team => clonedTeams.push(Object.assign({}, team)));

    // Subdivide the teams into two arrays
    const halfLength = Math.ceil(clonedTeams.length / 2);
    this.teamsFirstHalf = clonedTeams.splice(0, halfLength);
    this.teamsSecondHalf = clonedTeams;

    // Init variables
    this.currentGroup = 0;
    this.initGroups();

    // Shuffle array of teams
    this.randomizedTeams = this.shuffle(this.teamsFirstHalf.concat(this.teamsSecondHalf));
  }

  private initGroups(): void {
    const randomGroupNames = this.shuffle(this.groupNames);
    for (let i = 0; i < this.teamsListService.groupsNumber; i++) {
      this.groups.push(new Group(randomGroupNames[i]));
    }
  }

  public drawNewTeamInGroup(): void
  {
    const randomTeam = this.randomizedTeams.shift();
    this.groups[this.currentGroup].teams.push(Object.assign({}, randomTeam));
    this.currentGroup = (this.currentGroup + 1) % this.groups.length;
    this.markTeamAsExtracted(randomTeam);
  }

  public shuffle(teams: any[]): any[]
  {
    let currentIndex = teams.length;
    let temporaryValue;
    let randomIndex;

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

  private markTeamAsExtracted(randomTeam: Team): void
  {
    let teamToMark = this.teamsFirstHalf.find(team => team.name === randomTeam.name);
    if (!teamToMark) {
      teamToMark = this.teamsSecondHalf.find(team => team.name === randomTeam.name);
    }
    teamToMark.extracted = true;
  }
}
