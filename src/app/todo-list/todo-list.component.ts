import { Component, OnInit, Input } from '@angular/core';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { TodolistService } from '../services/todolist.service';
import { TodoItem } from '../_models/todo-item';
import { COMPLIMENTS } from '../complements';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  compliment = COMPLIMENTS;

  todolist: TodoItem[] = [];

  constructor(private todolistService: TodolistService) {
    this.getTodoList();
  }

  ngOnInit(): void {}

  getTodoList(): void {
    this.todolistService.getTodoList().subscribe((res) => {
      // console.log(JSON.stringify(res));
      this.todolist = res;
    });
  }

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

  /*  debug(id: number) {
    console.log(this.checkboxFlag);
    this.todolist.forEach((i) => {
      if ((i.id = id)) {
      }
    });
    this.checkboxFlag = !this.checkboxFlag;
  }

  changeStatus(id: number) {
    console.log(id);
    this.todolist.forEach((todo) => {
      if ((todo.id = id)) {
        console.log('found todo');
        todo.status = !todo.status;
        console.log(todo.status);
      }
    });
  }*/

  // Using Fisher-Yates algorithm to randomly shuffle complements https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  getComplement(): string {
    this.shuffle(this.compliment);
    return this.compliment[3];
  }

  shuffle(array: string[]) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
