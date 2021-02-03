import {Team} from '../teams-list/Team';

export class Group {

  /**
   * The teams part of the group.
   */
  public teams: Team[] = [];

  /**
   * The name of the group.
   */
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
