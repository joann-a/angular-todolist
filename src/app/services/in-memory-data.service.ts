import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TodoItem } from '../_models/todo-item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todolist = [
      { id: 1, desc: 'eat apple', duration: 11 },
      { id: 2, desc: 'eat orange', duration: 5 },
      { id: 3, desc: 'eat watermelon', duration: 10 },
    ];
    return { todolist };
  }
}
