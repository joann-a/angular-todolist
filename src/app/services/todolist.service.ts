import { Injectable } from '@angular/core';
import { TodoItem } from '../_models/todo-item';
import { Observable, of } from 'rxjs';
import { TODOLIST } from '../mock-items';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}
  private todoUrl = 'api/todolist'; // URL to web api

  getTodoList(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.todoUrl);
  }

  addTodo(todo: TodoItem): Observable<TodoItem> {
    return this.http
      .post(this.todoUrl, todo, this.httpOptions)
      .pipe(catchError(this.handleError<any>('addHero')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
