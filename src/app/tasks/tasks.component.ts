import { Component, OnInit } from "@angular/core";

import { Task } from "./shared/task.model";
import { TaskService } from "./shared/task.service";

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {

  public tasks: Array<Task>;
  public selectedTask: Task;

  public constructor(private taskService: TaskService) { }

  public ngOnInit() {

    this.taskService.getTasks()
      .subscribe(
        res => this.tasks = res,
        err => { alert("Erro no servidor. Tente mais tarde."), console.log(err)},
      )
  }

  public onSelect(task: Task): void {
    this.selectedTask = task;
  }
}