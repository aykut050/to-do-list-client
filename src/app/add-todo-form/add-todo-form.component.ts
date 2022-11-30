import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  todo: Todo = new Todo(0, "", false);
  constructor(private TodoService: TodoService, private router: Router) { }

  ngOnInit(): void {

  }

  addTodo(): void {
    this.TodoService.addTodo(this.todo).subscribe(response => {
      this.navigateTodoList()
    }, error => console.log(error));
  }

  navigateTodoList() {
    this.router.navigate(['/todos']);
  }

  onSubmit() {
    this.addTodo()
  }
}
