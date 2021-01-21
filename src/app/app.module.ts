import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { SetupTeamsComponent } from './setup-teams/setup-teams.component';
import { DrawGroupsComponent } from './draw-groups/draw-groups.component';
import { GroupComponent } from './group/group.component';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
	  AppComponent,
	  TeamsListComponent,
	  SetupTeamsComponent,
	  DrawGroupsComponent,
	  GroupComponent
  ],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatButtonModule,
		FormsModule,
		AppRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		MatTooltipModule,
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
