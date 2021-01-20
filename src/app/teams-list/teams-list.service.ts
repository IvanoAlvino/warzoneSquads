import { Injectable } from '@angular/core';
import {Team} from "./Team";

@Injectable({
  providedIn: 'root'
})
export class TeamsListService {

  /**
   * The list of already entered teams.
   */
  public teams: Team[] = [];
}
