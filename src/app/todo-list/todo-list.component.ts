import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos?: Todo[];

  constructor(private TodoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.getTodos();
  }

  private getTodos() {
    this.TodoService.getTodos().subscribe(response => {
      this.todos = response
    })
  }

  updateTodo(id: number) {
    this.router.navigate(['update-todo', id]);
  }
}
