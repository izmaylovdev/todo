import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import TodoItem from '../models/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL = environment.API_URL;
  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get<TodoItem[]>(`${this.baseURL}/todos`)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getTodo(id: number) {
    return this.httpClient.get<TodoItem>(`${this.baseURL}/todos/${id}`)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateTodo(todo: TodoItem) {
    return this.httpClient.put<TodoItem>(`${this.baseURL}/todos/${todo.id}`, todo)
      .pipe(
        catchError(this.errorHandler),
        map(updatedTodo => updatedTodo || todo) // this is hardcode... I know it... but this query returns null and I don't know why...
      );
  }

  deleteTodo(id: number) {
    return this.httpClient.delete<TodoItem>(`${this.baseURL}/todos/${id}`)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error);
  }
}
