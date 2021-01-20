import {Component, Input} from '@angular/core';

@Component({
  selector: 'group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {

  @Input()
  public teams: string[];

  constructor() { }
}
