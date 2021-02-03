import { Injectable } from '@angular/core';
import {Team} from './Team';

@Injectable({
  providedIn: 'root'
})
export class TeamsListService {

  /**
   * The list of already entered teams.
   */
  public teams: Team[] = [{name: 'alberto', extracted: false}, {name: 'luigi', extracted: false},
    {name: 'fausto', extracted: false}, {name: 'ivano', extracted: false}, {name: 'danny', extracted: false},
    {name: 'tony', extracted: false}, {name: 'melo', extracted: false}, {name: 'toju', extracted: false}];
}
