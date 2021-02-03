import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Task } from "../shared/task.model";
import { TaskService } from "../shared/task.service";

@Component({
  selector: 'task-detail',
  templateUrl: 'task-detail.component.html'
})
export class TaskDetailComponent implements OnInit {

  public task: Task;

  public constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    let id: number;
    this.route.params.subscribe((params) => id = params['id']); //pegar o :id da rota
    this.taskService.getTask(id)
      .subscribe(
        res => this.task = res,
        err => { alert("Erro no servidor. Tente mais tarde."), console.log(err) },
      )
  }

  public goBack() {
    this.location.back();
  }

  public updateTask() {
    if (!this.task.title) {
      alert("A tarefa deve conter um título.")
    } else {
      this.taskService.updateTask(this.task)
        .subscribe(
          () => { alert("Salvo com sucesso.") },
          err => { alert("Erro no servidor. Tente mais tarde."), console.log(err) },
        )
    }
  }
}