import { Injectable } from "@angular/core";

import { Task } from "./task.model";

const tasks: Array<Task> = [
  { id: 1, title: 'Fazer tarefa 1' },
  { id: 2, title: 'Fazer tarefa 2' },
  { id: 3, title: 'Fazer tarefa 3' },
  { id: 4, title: 'Fazer tarefa 4' },
  { id: 5, title: 'Fazer tarefa 5' },
  { id: 6, title: 'Fazer tarefa 6' },
  { id: 7, title: 'Fazer tarefa 7' },
];

@Injectable()
export class TaskService {

  public getTasks(): Promise<Array<Task>> {
    let promise: Promise<Task[]> = new Promise((resolve, reject) => {
      if (tasks.length > 0) {
        return resolve(tasks);
      } else {
        return reject([{ id: 0, title: "Não há terefas a serem apresentadas" }]);
      }
    })
    return promise;
  }

  public getImportantTasks(): Promise<Task[]> {
    return Promise.resolve(tasks.slice(0, 3));
  }

  public getTask(id: number): Promise<Task> {
    return Promise.resolve(tasks.find((task) => task.id == id));
  }

}