import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TodoItem } from '../_models/todo-item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todolist = [];
    return { todolist };
  }

  genId(todolist: TodoItem[]): number {
    return todolist.length > 0
      ? Math.max(...todolist.map((todo) => todo.id)) + 1
      : 11;
  }
}
