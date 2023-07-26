import { Component } from '@angular/core';
import { Tasks } from './Tasks';
import{MatDialog} from '@angular/material/dialog'
import { PopUpComponent } from '../delete-pop-up/pop-up.component';



@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']

})
export class ToDoListComponent  {
  titleOverAll = "TodoList With Angular";
  tasks : Tasks[]  =[]; 
   compeleted : Tasks[] = [];
   contanr : Tasks [] = [];

  title!: string;
  searchTitle!:string;
  sreachSwitch!:boolean;
  date: Date = new Date();
  // drop downlist 
  selectedOption = "All";
  //checkbox
  isEdite:boolean | undefined;
  
  constructor(public dialogRef : MatDialog){}
 
//pop up for deleting task
openDialog(): void {
  this.dialogRef.open(PopUpComponent,{
    data:{
      taskList : this.tasks,
       taskTitle : this.title
    }
  });
}



  addTask(titleName : any) {

   if( titleName.target.value !=='') 
    this.tasks.push( new Tasks(titleName.target.value));
  }

  //deleteTask updated > delete-pop-up


   isSelected( task :Tasks){
   task.isSelected =  !task.isSelected; 

  }

  edite(task:Tasks) { 
    task.isEdite =! task.isEdite;
  }

// search 
titleFilter(searchTitle : string) : Tasks[] {
  return this.tasks.filter(task =>task.title.includes(searchTitle))
   
}

listFilter( data : Tasks[] , selectedOption: string): Tasks[] | undefined{
  if (selectedOption === 'Complete'){

    console.log(data.filter(task => task.isSelected));
    this.compeleted =  data.filter(task => task.isSelected); 
    this.contanr = this.tasks
    this.tasks = this.compeleted;
       return this.compeleted;
  }   
   else if (selectedOption === 'All'){   
    this.tasks = this.contanr ; 
      return   this.tasks;
     }
     return   undefined
 
}

  }

  
  // data.filter(task => task)







// let index = this.toDoList.indexOf(item)



// https://www.youtube.com/watch?v=R8rmfD9Y5-c
      
      // this.toDoList[id].valueOf() === this.completeTasks[i].valueOf()))
    // for (let i=0 ; i < this.completeTasks.length ; i++) {
    
    //   if (this.toDoList[id].valueOf() === this.completeTasks[i].valueOf()) {
       
    //   }


    // edite(item: string,id:number){
    //   let con ;
    //   if(this.toDoList[id]) {
    //     item = this.item;
    //        con = item;
    //   this.item = con;
    //   }
   
    // }