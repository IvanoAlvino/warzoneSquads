import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsListService {

  /**
   * The list of already entered teams.
   */
  private _teams: string[] = ["Bwonu Nkolou", "Ughinese", "Cercinelgrano", "Aciclovir",
                              "ST PETER&PAULI", "Polisportiva Camisola", "Atletico Gullo",
                              "TORINOIZ FC"];

  public get teams(): string[]
  {
    return this._teams;
  }

  public set teams(value: string[])
  {
    this._teams = value;
  }

  constructor() { }
}
