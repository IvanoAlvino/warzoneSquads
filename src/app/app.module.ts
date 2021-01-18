import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamsListComponent } from './add-team/teams-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
	  AppComponent,
	  TeamsListComponent
  ],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatButtonModule,
		FormsModule,
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
