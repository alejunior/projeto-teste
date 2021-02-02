import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

import { Task } from "./task.model";

@Injectable()
export class TaskService {

  public tasksUrl: string = "api/tasks";

  public constructor(private http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        catchError((err: Response) => throwError(err))
      )
  }

  public getImportantTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        map(tasks => tasks.slice(0, 3)),
        catchError((err: Response) => throwError(err))
      )
  }

  public getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url)
      .pipe(
        catchError((err: Response) => throwError(err))
      )
  }

  public createTask(newTask: Task): Observable<Task> {
    const url = this.tasksUrl;
    const boby = newTask;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.http.post<Task>(url, boby, { headers })
      .pipe(
        map((newTask: Task) => newTask),
        catchError((err: Response) => throwError(err))
      )
  }

  public updateTask(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    const boby = task;
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.put<Task>(url, boby, { headers })
      .pipe(
        map((task: Task) => task),
        catchError((err: Response) => throwError(err))
      )
  }

}