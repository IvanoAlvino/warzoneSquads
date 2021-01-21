import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SetupTeamsComponent} from './setup-teams/setup-teams.component';
import {DrawGroupsComponent} from './draw-groups/draw-groups.component';

const routes: Routes = [
  { path: 'draw', component: DrawGroupsComponent },
  { path: '**', component: SetupTeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
