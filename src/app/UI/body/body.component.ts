import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() { }
  
  tasks = [];
  taskChange: Subject<null> = new Subject<null>();

  drop(event: CdkDragDrop<string[]>) {
    
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    this.taskChange.next();
  }

  ngOnInit() {

    if(localStorage.getItem('tasks') !== null){
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    this.taskChange.subscribe(value=>{
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    });
  }

    onKeyDown(event:any){
    
    this.tasks.push({taskText: event.target.value, status: "Active"});
    this.taskChange.next();
    event.target.value = "";

  }

  removeItem(index:number){
    
    this.tasks.splice(index,1);
    this.taskChange.next();

  }

  getTasks(){
    let tasks = [];
    if(localStorage.getItem('tasks') !== null){
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }


  checkItem(event:MatCheckboxChange,index:number ){
    console.log(event);
    //let tasks = this.getTasks();
    if(event.checked){
      this.tasks[index].status = "Completed";
    }
    else{
      this.tasks[index].status = "Active";
    }
    this.taskChange.next();
  }

}
