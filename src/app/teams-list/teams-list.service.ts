import { Injectable } from '@angular/core';
import {Team} from './Team';

@Injectable({
  providedIn: 'root'
})
export class TeamsListService {

  /**
   * The list of already entered teams.
   */
  public teams: Team[] = [{name: 'Ughinese Calcio', extracted: false}, {name: 'Bwonu Nkolou', extracted: false},
    {name: 'Polisportiva Camisola', extracted: false}, {name: 'ST PETER&PAULI', extracted: false},
    {name: 'Cercinelgrano', extracted: false}, {name: 'Aciclovir', extracted: false},
    {name: 'Atletico Gullo', extracted: false}, {name: 'TORINOIZ', extracted: false}];

  /**
   * The number of groups in which the user wants to distribute the {@link teams}.
   */
  public groupsNumber = 2;
}
