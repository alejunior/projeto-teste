import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, of } from "rxjs";
import { switchMap, debounceTime } from "rxjs/operators";

import { TaskService } from "src/app/tasks/shared/task.service";
import { Task } from "src/app/tasks/shared/task.model";

@Component({
  selector: 'task-search',
  templateUrl: 'task-search.component.html'
})
export class TaskSearchComponent implements OnInit {

  public searchTerms: Subject<string> = new Subject();
  public tasks: Task[] = [];

  public constructor(
    private taskService: TaskService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.searchTerms
      .pipe(
        debounceTime(400), //gerando um delay na digitação
        switchMap(term => term ? this.taskService.searchByTitle(term) : of<Task[]>([])
      ))
      .subscribe(tasks => this.tasks = tasks);
  }

  public search(term: string) { //pegar o evento keyup
    this.searchTerms.next(term);
  }

  public goToTask(task: Task) {
    this.router.navigate(['/tasks', task.id]);
    this.tasks = [];
  }

}