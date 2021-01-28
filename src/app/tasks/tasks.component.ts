import { Component, OnInit } from "@angular/core";

import { Task } from "./shared/task.model";

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {

  public tasks: Array<Task>;
  public selectedTask: Task;

  public constructor() {
  }

  public t: Array<Task> = [
    { id: 1, title: 'Tarefa 1' },
    { id: 2, title: 'Tarefa 2' },
    { id: 3, title: 'Tarefa 3' },
    { id: 4, title: 'Tarefa 4' }
  ];

  ngOnInit(): void {
    this.tasks = this.t;
  }

  public onSelect(task: Task): void{
    this.selectedTask = task;
  }
}