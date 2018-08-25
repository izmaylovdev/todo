import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import TodoItem from '../../models/todo-item.model';
import { TODOS_ACTIONS } from '../actions/todos.actions';

export interface State extends EntityState<TodoItem> {}

export const adapter: EntityAdapter<TodoItem> = createEntityAdapter<TodoItem>();

const initialState = adapter.getInitialState();

export function reducer(state = initialState, { type, payload }) {
    switch (type) {

        case TODOS_ACTIONS.CREATE_TODO:
            return adapter.addOne(payload, state);

        case TODOS_ACTIONS.UPDATE_TODO:
            return adapter.updateOne(payload, state);

        case TODOS_ACTIONS.DELETE_TODO:
            return adapter.removeOne(payload, state);

        case TODOS_ACTIONS.LOAD_TODOS_SUCCESS:
            return adapter.addMany(payload, state);

        default:
            return state;
    }
}

export const selectors = adapter.getSelectors();
