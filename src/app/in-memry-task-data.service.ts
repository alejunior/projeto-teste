import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Task } from "./tasks/shared/task.model";

@Injectable()
export class InMemoryTaskDataService implements InMemoryDbService{
  
  public createDb(){
    const tasks: Array<Task> = [
      { id: 1, title: 'Comprar celular novo' },
      { id: 2, title: 'Pagar boleto' },
      { id: 3, title: 'Pagar Internet' },
      { id: 4, title: 'Assistir aula sobre Rails' },
      { id: 5, title: 'Assistir aula sobre Angular' },
      { id: 6, title: 'Comprar Pizza' },
      { id: 7, title: 'Pagar Aluguel' },
      { id: 8, title: 'Enviar encomenda por correios' }
    ];

    return { tasks };
  }

}