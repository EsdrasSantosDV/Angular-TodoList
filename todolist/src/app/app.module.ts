import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ListComponent } from './list/list.component';
import { TaskDetailsListComponent } from './task-details-list/task-details-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskDetailsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
