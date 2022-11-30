import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-update-todo-form',
  templateUrl: './update-todo-form.component.html',
  styleUrls: ['./update-todo-form.component.css']
})
export class UpdateTodoFormComponent implements OnInit {
  
  id: number = 0;
  todo: Todo = new Todo(0, "", false);

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.todoService.getTodoById(this.id).subscribe(response => {
      this.todo = new Todo(response.id, response.nameTodo, response.isCompleted);
    }, error => console.log(error));
  }

  updateTodo() {
    this.todoService.updateTodo(this.todo, this.id).subscribe(response => {
      this.router.navigate(['/todos']);
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateTodo()
  }
}
