import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { TODOS_ACTIONS, LoadTodosSuccessAction, LoadTodosAction, LoadTodoAction } from '../actions/todos.actions';
import { DataService } from '../../services/data.service';

@Injectable()
export class TodosEffects {

    constructor(private actions$: Actions, private dataService: DataService) {}

    @Effect()
    loadTodos$: Observable<Action> = this.actions$.pipe(
        ofType(TODOS_ACTIONS.LOAD_TODOS),
            mergeMap(_ => this.dataService.getTodos()),
            map(todos => new LoadTodosSuccessAction(todos)),
    );

    @Effect()
    loadTodo$: Observable<Action> = this.actions$.pipe(
        ofType(TODOS_ACTIONS.LOAD_TODO),
            mergeMap((action: LoadTodoAction) => this.dataService.getTodo(action.payload)),
            map(todo => new LoadTodosSuccessAction([todo])),
    );
}
