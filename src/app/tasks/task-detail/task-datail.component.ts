import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Task } from "../shared/task.model";
import { TaskService } from "../shared/task.service";

@Component({
  selector: 'task-detail',
  templateUrl: 'task-detail.component.html'
})
export class TaskDetailComponent implements OnInit, AfterViewInit {
  
  public task: Task = {id: null, title: null};

  public taskDoneOptions: Array<any> = [
    { value: false, text: "Pendente" },
    { value: true, text: "Pronto" }
  ]
  
  public constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  public ngAfterViewInit(): void {
    // aguarda o templete ser carregado para iniciar  que estiver aqui.
  }

  public ngOnInit(): void {
    let id: number;
    this.route.params.subscribe((params) => id = params['id']); //pegar o :id da rota
    this.taskService.getTask(id)
      .subscribe(
        task => this.task = task,
        err => { alert("servidor indisponível, tente mais tarde."), console.log(err) },
      )
    }

  public goBack() {
    this.location.back();
  }

  public updateTask() {
    this.taskService.updateTask(this.task)
      .subscribe(
        () => { alert("Salvo com sucesso.") },
        err => { alert("servidor indisponível, tente mais tarde."), console.log(err) },
      )
  }
}