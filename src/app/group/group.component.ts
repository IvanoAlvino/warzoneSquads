import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../teams-list/Team';

@Component({
  selector: 'teams-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input()
  public teams: Team[];

  @Input()
  public groupName: string;

  @Input()
  public borderColor: string;

  @Input()
  public borderSize: string;

  @Input()
  public showBorder = false;

  public ngOnInit(): void {
    if (!this.borderColor) {
      this.borderColor = 'black';
    }

    if (!this.borderSize) {
      this.borderSize = '1';
    }
  }
}
