import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Task } from "../shared/task.model";
import { TaskService } from "../shared/task.service";

@Component({
  selector: 'task-detail',
  templateUrl: 'task-detail.component.html'
})
export class TaskDetailComponent implements OnInit, AfterViewInit {
  
  public task: Task;
  
  public taskDoneOptions: Array<any>;
  
  public reactiveTaskForm: FormGroup;
  
  public constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) { 
    this.task = new Task(null, null);

    this.taskDoneOptions = [
      { value: false, text: "Pendente" },
      { value: true, text: "Pronto" }
    ];

    this.reactiveTaskForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      deadline: [null, Validators.required],
      done: [null, Validators.required],
      description: [null],
      user: this.formBuilder.group({
        name: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
        email: [null, [Validators.required, Validators.email]]
      })
    });
  }
  
  public ngOnInit(): void {
    let id: number;
    this.route.params.subscribe((params) => id = params['id']); //pegar o :id da rota
    this.taskService.getTask(id)
    .subscribe(
      task => { this.task.id = task.id, this.setTaskForm(task) },
      err => { alert("servidor indisponível, tente mais tarde"), console.log(err) },
      )
    }

  public setTaskForm(task:Task): void {
    this.reactiveTaskForm.setValue({
      title: task.title || null,
      deadline: task.deadline || null,
      done: task.done || null,
      description: task.description || null,
      user: { name: "joao carlos", email: "joao@carlos.com"}
    });

    //  //patchValue usado quando não passa todos os campos
    // this.reactiveTaskForm.patchValue({
    //   title: task.title || null,
    //   deadline: task.deadline || null
    // });
  }

  public ngAfterViewInit(): void {
    // aguarda o templete ser carregado para iniciar  que estiver aqui.
  }
    
  public goBack() {
    this.location.back();
  }

  public updateTask(task:Task) {
    task.id = this.task.id;
    this.taskService.updateTask(task)
      .subscribe(
        () => { alert("Salvo com sucesso.") },
        err => { alert("servidor indisponível, tente mais tarde."), console.log(err) },
      )
  }

  // validação do template
  public fieldClassError(fieldName: string) {
    return {
      "is-invalid": this.reactiveTaskForm.get(fieldName).invalid && (this.reactiveTaskForm.get(fieldName).touched || this.reactiveTaskForm.get(fieldName).dirty),
      "is-valid": this.reactiveTaskForm.get(fieldName).valid && (this.reactiveTaskForm.get(fieldName).touched || this.reactiveTaskForm.get(fieldName).dirty)
    }
  }
}