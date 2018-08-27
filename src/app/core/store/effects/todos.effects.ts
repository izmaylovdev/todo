import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { TodosActionTypes, LoadTodosSuccessAction, LoadTodoAction } from '../actions/todos.actions';
import { DataService } from '../../services/data.service';

@Injectable()
export class TodosEffects {

    constructor(private actions$: Actions, private dataService: DataService) {}

    @Effect()
    loadTodos$: Observable<Action> = this.actions$.pipe(
        ofType(TodosActionTypes.LOAD_TODOS),
            mergeMap(_ => this.dataService.getTodos()),
            map(todos => new LoadTodosSuccessAction(todos)),
    );

    @Effect()
    loadTodo$: Observable<Action> = this.actions$.pipe(
        ofType(TodosActionTypes.LOAD_TODO),
            mergeMap((action: LoadTodoAction) => this.dataService.getTodo(action.payload)),
            map(todo => new LoadTodosSuccessAction([todo])),
    );
}
