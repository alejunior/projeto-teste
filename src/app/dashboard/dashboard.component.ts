import { Component, OnInit } from "@angular/core";
import { Task } from "../tasks/shared/task.model";
import { TaskService } from "../tasks/shared/task.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  public tasks: Array<Task>;

  public constructor(private taskServive: TaskService) { }

  ngOnInit(): void {
    this.taskServive.getImportantTasks()
      .subscribe(
        res => this.tasks = res,
        err => { alert("Erro no servidor. Tente mais tarde."), console.log(err) },
      )
  }
}