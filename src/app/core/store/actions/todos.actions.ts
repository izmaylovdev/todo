import TodoItem from '../../models/todo-item.model';

export enum TodosActionTypes {
    CREATE_TODO = '[TODOS] Create a new todo-item',
    LOAD_TODOS = '[TODOS] Load list of todos from server',
    LOAD_TODO = '[TODOS] Load todo by ID from server',
    LOAD_TODOS_SUCCESS = '[TODOS] List of todos loaded',
    UPDATE_TODO = '[TODOS] Update todo',
    UPDATE_TODO_SUCCESS = '[TODOS] Todo successfuly updated on server',
    DELETE_TODO = '[TODOS] Delete todo'
}

export class CreateTodoAction {
    readonly type = TodosActionTypes.CREATE_TODO;
    constructor(public payload: TodoItem) {}
}

export class UpdateTodoAction {
    readonly type = TodosActionTypes.UPDATE_TODO;
    constructor(public payload: TodoItem) {}
}

export class UpdateTodoSuccessAction {
    readonly type = TodosActionTypes.UPDATE_TODO_SUCCESS;
    constructor(public payload: TodoItem) {}
}

export class DeleteTodoAction {
    readonly type = TodosActionTypes.DELETE_TODO;
    constructor(public payload: TodoItem) {}
}

export class LoadTodosAction {
    readonly type = TodosActionTypes.LOAD_TODOS;
}

export class LoadTodoAction {
    readonly type = TodosActionTypes.LOAD_TODO;
    constructor(public payload: number) { }
}

export class LoadTodosSuccessAction {
    readonly type = TodosActionTypes.LOAD_TODOS_SUCCESS;
    constructor(public payload: TodoItem[]) {}
}
