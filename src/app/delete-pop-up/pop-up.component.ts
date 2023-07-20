import { Component, Inject, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { Tasks } from '../to-do-list/Tasks';



@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']

})
export class PopUpComponent {

list :Tasks[]= []; 
title: any;
  constructor(
    private dialogRef: MatDialogRef<ToDoListComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
   this.list = data.taskList;
   this.title = data.taskTitle;
      
  }


  deleteTask() {
    let index = this.list.indexOf(this.title);
    this.list.splice(index , 1);
    this.dialogRef.close();
  }
  
  Cancel(): void {
    this.dialogRef.close();
  }




}
