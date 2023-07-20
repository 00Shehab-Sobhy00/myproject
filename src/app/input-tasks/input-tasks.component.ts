import { Component, EventEmitter, Input, Output } from '@angular/core';
import{MatDialog} from '@angular/material/dialog'
import { MatchTaskPopUpComponent } from '../match-task-pop-up/match-task-pop-up.component';


@Component({
  selector: 'input-tasks',
  templateUrl: './input-tasks.component.html',
  styleUrls: ['./input-tasks.component.css']
})
export class InputTasksComponent {
  @Input('title') title!: string;
  @Output("click") send = new EventEmitter<string>();
  listEqual: string[] = [];
  tasks: any;
switchDialog! : boolean;
  constructor(public dialogRef : MatDialog){}

  openDialog(): void {
    if (this.listEqual.includes(this.title)){
      this.dialogRef.open(MatchTaskPopUpComponent,{
        data: "data Matched"
      })
    }
    this.listEqual.push(this.title);
    this.send.emit(this.title) 
}
}

