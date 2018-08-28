import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, throwError } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import {
    TodosActionTypes, LoadTodosSuccessAction, LoadTodoAction, UpdateTodoAction, UpdateTodoSuccessAction
} from '../actions/todos.actions';
import { DataService } from '../../services/data.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class TodosEffects {

    constructor(private actions$: Actions, private dataService: DataService, public snackBar: MatSnackBar) {}

    @Effect()
    loadTodos$: Observable<Action> = this.actions$.pipe(
        ofType(TodosActionTypes.LOAD_TODOS),
            mergeMap(_ => this.dataService.getTodos()),
            map(todos => new LoadTodosSuccessAction(todos)),
            catchError(error => this.errorHandler({ message: 'Something went wrong in todos loading, try again.' }))
    );

    @Effect()
    loadTodo$: Observable<Action> = this.actions$.pipe(
        ofType(TodosActionTypes.LOAD_TODO),
            mergeMap((action: LoadTodoAction) => this.dataService.getTodo(action.payload)),
            map(todo => new LoadTodosSuccessAction([todo])),
            catchError(error => this.errorHandler({ message: 'Something went wrong in todos loading, try again.' }))
    );

    @Effect()
    updateTodo$: Observable<Action> = this.actions$.pipe(
        ofType(TodosActionTypes.UPDATE_TODO),
            mergeMap((action: UpdateTodoAction) => this.dataService.updateTodo(action.payload)),
            map(todo => new UpdateTodoSuccessAction(todo)),
            catchError(error => this.errorHandler({ message: 'Something went wrong in todos updating, try again.' }))
    );

    errorHandler(error) {
        this.snackBar.open(error.message, 'Hide');
        return throwError(error);
    }
}
