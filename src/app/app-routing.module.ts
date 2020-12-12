import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoTmrComponent } from './todo-tmr/todo-tmr.component';

const routes: Routes = [
  { path: 'todolist', component: TodoListComponent },
  { path: 'todo_tmr', component: TodoTmrComponent },
  { path: '', component: TodoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
