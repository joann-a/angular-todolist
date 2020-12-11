import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { TodolistService } from '../services/todolist.service';
import { TodoItem } from '../_models/todo-item';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-todo-tmr',
  templateUrl: './todo-tmr.component.html',
  styleUrls: ['./todo-tmr.component.css'],
})
export class TodoTmrComponent implements OnInit {
  todolist: TodoItem[] = [];

  constructor(private todolistService: TodolistService) {}

  ngOnInit(): void {}

  getTodoList(): void {}

  add(desc: string): void {
    desc = desc.trim();
    if (!desc) {
      return;
    }

    this.todolistService.addTodo({ desc } as TodoItem).subscribe((res) => {
      console.log(JSON.stringify(res));
      this.todolist.push(res);
    });
  }
}
