import TodoItem from '../../models/todo-item.model';

export const TODOS_ACTIONS = {
    CREATE_TODO: '[TODOS] Create a new todo-item',
    LOAD_TODOS: '[TODOS] Load list of todos from server',
    LOAD_TODO: '[TODOS] Load todo by ID from server',
    LOAD_TODOS_SUCCESS: '[TODOS] List of todos loaded',
    UPDATE_TODO: '[TODOS] Update todo',
    DELETE_TODO: '[TODOS] Delete todo'
};

export class CreateTodoAction {
    readonly type = TODOS_ACTIONS.CREATE_TODO;
    constructor(public payload: TodoItem) {}
}

export class UpdateTodoAction {
    readonly type = TODOS_ACTIONS.UPDATE_TODO;
    constructor(public payload: TodoItem) {}
}

export class DeleteTodoAction {
    readonly type = TODOS_ACTIONS.DELETE_TODO;
    constructor(public payload: TodoItem) {}
}

export class LoadTodosAction {
    readonly type = TODOS_ACTIONS.LOAD_TODOS;
}

export class LoadTodoAction {
    readonly type = TODOS_ACTIONS.LOAD_TODOS;
    constructor(public payload: number) { }
}

export class LoadTodosSuccessAction {
    readonly type = TODOS_ACTIONS.LOAD_TODOS_SUCCESS;
    constructor(public payload: TodoItem[]) {}
}
