import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, todosSelectors } from '../../core/store';
import { Subscription } from 'rxjs';
import TodoItem from '../../core/models/todo-item.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoadTodoAction, UpdateTodoAction } from '../../core/store/actions/todos.actions';

@Component({
  selector: 'todo-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {

  todo: TodoItem;
  subs: Subscription[];

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subs = [
      this.route.paramMap
        .pipe(
          map(paramsMap => parseInt(paramsMap.get('id'), 10))
        )
        .subscribe(id => {
          this.store.dispatch(new LoadTodoAction(id));
        }),

      this.store.select(todosSelectors.selectTodoForCurrentRoute)
        .subscribe(todo => this.todo = todo)
    ];
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  onNameChange(name: string) {
    const updatedTodo = { ...this.todo, name };
    this.store.dispatch(new UpdateTodoAction(updatedTodo));
  }

}
