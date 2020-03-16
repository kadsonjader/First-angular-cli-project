import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tarefas = [];
  tarefa = "";
  isAdmin = true;
  add():void{
    this.tarefas.push(this.tarefa);
  }

}
