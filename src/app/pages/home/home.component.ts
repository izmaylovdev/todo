import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import TodoItem from '../../core/models/todo-item.model';
import { Store } from '@ngrx/store';
import { AppState, todosSelectors } from '../../core/store';
import { LoadTodosAction } from '../../core/store/actions/todos.actions';

@Component({
  selector: 'todo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items$: Observable<TodoItem[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadTodosAction());
    this.items$ = this.store.select(todosSelectors.selectActiveTodos);
  }

}
