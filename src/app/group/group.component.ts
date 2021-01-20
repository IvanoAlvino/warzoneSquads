import {Component, Input} from '@angular/core';
import {Team} from "../teams-list/Team";

@Component({
  selector: 'group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {

  @Input()
  public teams: Team[];

  constructor() { }
}
