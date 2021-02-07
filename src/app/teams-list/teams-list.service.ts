import { Injectable } from '@angular/core';
import {Team} from './Team';

@Injectable({
  providedIn: 'root'
})
export class TeamsListService {

  /**
   * The list of already entered teams.
   */
  public teams: Team[] = [{name: 'IvoAviduz', extracted: false}, {name: 'Hydra Sniper', extracted: false},
    {name: 'Toju', extracted: false}, {name: 'BobLeeSwagger', extracted: false},
    {name: 'BornToGrill', extracted: false}, {name: 'Non_Sei_Degno', extracted: false}, {name: 'Ste89', extracted: false},
    {name: 'Gabricata95', extracted: false}, {name: 'Planetterra2000', extracted: false}, {name: 'Zulbo96', extracted: false},
    {name: 'Toninho', extracted: false}, {name: 'simocalle99', extracted: false}, {name: 'EmiLoZio', extracted: false},
    {name: 'ImpatientStew07', extracted: false}];

  /**
   * The number of groups in which the user wants to distribute the {@link teams}.
   */
  public groupsNumber = 2;
}
