import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DropdownListPipe } from './to-do-list/dropdown-list.pipe';
import { ToDoListService } from './to-do-list/to-do-list.service';
import { InputTasksComponent } from './input-tasks/input-tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './delete-pop-up/pop-up.component';
import { MatButtonModule } from '@angular/material/button';
import { MatchTaskPopUpComponent } from './match-task-pop-up/match-task-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,

    DropdownListPipe,
    InputTasksComponent,
    PopUpComponent,
    MatchTaskPopUpComponent,

  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, MatPaginatorModule
    , MatDialogModule, MatButtonModule,
  ],

  providers: [
    ToDoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
