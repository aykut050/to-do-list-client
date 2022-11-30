import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UpdateTodoFormComponent } from './update-todo-form/update-todo-form.component';

const routes: Routes = [
  { path: 'todos', component:TodoListComponent },
  { path: '', redirectTo: 'todos', pathMatch: 'full'},
  { path: 'add-todo', component: AddTodoFormComponent },
  { path: 'update-todo/:id', component: UpdateTodoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
