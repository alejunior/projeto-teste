import { Component, OnInit } from "@angular/core";

import { Task } from "./shared/task.model";
import { TaskService } from "./shared/task.service";

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
  //providers: [ { provide: TaskService, useClass: TaskService } ]
})
export class TasksComponent implements OnInit {

  public tasks: Array<Task>;
  public selectedTask: Task;

  private taskService: TaskService

  public constructor(obj: TaskService) {
    this.taskService = obj;
  }

  public ngOnInit() {
    this.taskService.getTasks()
      .then( (tasks) => this.tasks = tasks)
      .catch( (obj: Task[]) => {
        this.tasks = obj;
       });
  }

  public onSelect(task: Task): void {
    this.selectedTask = task;
  }
}