import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InputTasksComponent } from '../input-tasks/input-tasks.component';

@Component({
  selector: 'app-match-task-pop-up',
  templateUrl: './match-task-pop-up.component.html',
  styleUrls: ['./match-task-pop-up.component.css']
})
export class MatchTaskPopUpComponent {

  constructor(public dialogRef: MatDialogRef<InputTasksComponent>) {
  }
  Cancel(): void {
    this.dialogRef.close();
  }

}
