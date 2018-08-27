import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import TodoItem from '../../models/todo-item.model';
import { TodosActionTypes } from '../actions/todos.actions';

export interface State extends EntityState<TodoItem> {}

export const adapter: EntityAdapter<TodoItem> = createEntityAdapter<TodoItem>();

const initialState = adapter.getInitialState();

export function reducer(state = initialState, { type, payload }) {
    switch (type) {

        case TodosActionTypes.CREATE_TODO:
            return adapter.addOne(payload, state);

        case TodosActionTypes.UPDATE_TODO:
            return adapter.updateOne({
                id: payload.id,
                changes: payload
            }, state);

        case TodosActionTypes.DELETE_TODO:
            return adapter.removeOne(payload, state);

        case TodosActionTypes.LOAD_TODOS_SUCCESS:
            return adapter.addMany(payload, state);

        default:
            return state;
    }
}

export const selectors = adapter.getSelectors();
