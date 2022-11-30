import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 
  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${environment.baseURL}` + "/api/todos");
  }

  addTodo(todo: Todo): Observable<Object> {
    return this.httpClient.post(`${environment.baseURL}` + "/api/todo", todo);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${environment.baseURL}` + "/api/todos/" + `${id}`);
  }

  updateTodo(todo: Todo, id: number): Observable<Object> {
    return this.httpClient.put<Object>(`${environment.baseURL}` + "/api/todos/" + `${id}`, todo);
  }
}
