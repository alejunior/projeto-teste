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
    const headers = new HttpHeaders()
      //.set('Authorization', `${token.token_type} ${token.access_token}`)
      .set('Content-Type', 'application/json')
      .set('Accept', '*/*');
    return this.http.get<Task[]>(this.tasksUrl, { headers })
      .pipe(
        map((tasks: Task[]) => tasks),
        catchError((err: Response) => throwError(err))
      )
  }

  public getImportantTasks(): Observable<Task[]> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', '*/*');
    return this.http.get<Task[]>(this.tasksUrl, { headers })
      .pipe(
        map(tasks => tasks.slice(0, 3)),
        catchError((err: Response) => throwError(err))
      )
  }

  public getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', '*/*');
    return this.http.get<Task>(url, { headers })
      .pipe(
        map((task: Task) => task),
        catchError((err: Response) => throwError(err))
      )
  }

  public createTask(newTask: Task): Observable<Task> {
    const url = this.tasksUrl;
    const boby = newTask;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', '*/*');
    return this.http.post<Task>(url, boby, { headers })
      .pipe(
        map((newTask: Task) => newTask),
        catchError((err: Response) => throwError(err))
      )
  }

  public updateTask(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    const boby = task;
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set('Accept', '*/*');
    return this.http.put<Task>(url, boby, { headers })
      .pipe(
        map((task: Task) => task),
        catchError((err: Response) => throwError(err))
      )
  }

  public deleteTask(id: number): Observable<null> {
    const url = `${this.tasksUrl}/${id}`;
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set('Accept', '*/*');
    return this.http.delete(url, { headers })
      .pipe(
        map(() => null),
        catchError((err: Response) => throwError(err))
      )
  }

  public searchByTitle(term: string): Observable<Task[]> {
    const url = `${this.tasksUrl}?title=${term}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', '*/*');
    return this.http.get<Task[]>(url, { headers })
      .pipe(
        map((tasks: Task[]) => tasks),
        catchError((err: Response) => throwError(err))
      );
  }

  //  getTokenWSO2(){
  //   const headers = new HttpHeaders()
  //     .set( 'Content-Type', 'application/x-www-form-urlencoded');
  //   let body = new URLSearchParams();
  //   body.set('grant_type', 'client_credentials');
  //   body.set('client_id', this.environment.name != 'producao' ? CLIENT_SECRET : CLIENT_SECRET_PROD);
  //   body.set('client_secret',this.environment.name != 'producao' ? CLIENT_PASS : CLIENT_PASS_PROD);
  //   return this.http.post(`${this.environment.wso2URL}/token`, body.toString() , {headers: headers })
  // }

}