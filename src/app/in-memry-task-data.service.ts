import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Task } from "./tasks/shared/task.model";

@Injectable()
export class InMemoryTaskDataService implements InMemoryDbService{
  
  public createDb(){
    const tasks: Array<Task> = [
      { id: 1, title: 'Fazer tarefa 1' },
      { id: 2, title: 'Fazer tarefa 2' },
      { id: 3, title: 'Fazer tarefa 3' },
      { id: 4, title: 'Fazer tarefa 4' },
      { id: 5, title: 'Fazer tarefa 5' },
      { id: 6, title: 'Fazer tarefa 6' },
      { id: 7, title: 'Fazer tarefa 7' },
    ];

    return { tasks };
  }

}