import { Component, OnInit } from "@angular/core";

import { Task } from "./shared/task.model";
import { TaskService } from "./shared/task.service";

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {

  public tasks: Array<Task>;
  public newTask: Task;

  public constructor(private taskService: TaskService) {
    this.newTask = new Task(9, '');
   }

  public ngOnInit() {

    this.taskService.getTasks()
      .subscribe(
        tasks => this.tasks = tasks.sort((a, b)=> b.id - a.id), //traz array na ordem inversa
        err => { alert("Erro no servidor"), console.log(err)}
      )
  }

  public createTask(){
    this.newTask.title = this.newTask.title.trim();
    this.taskService.createTask(this.newTask)
      .subscribe(
        newTask => { 
          this.tasks.unshift(newTask); // adicionando tarefa no início do array
          this.newTask = new Task(null, ''); // limpando o input
        },
        err => { alert("servidor indisponível, tente mais tarde"), console.log(err) }
      )
  }

  public deleteTask(task:Task) {
    if( confirm(`Deseja excluir a tarefa "${task.title}"?`)) {
      this.taskService.deleteTask(task.id)
        .subscribe(
          () => { 
            this.tasks = this.tasks.filter(t => t !== task);
          },
          err => { alert("Erro no servidor."), console.log(err) }
        )
    }
  }



}