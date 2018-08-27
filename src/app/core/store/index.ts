import {
  ActionReducerMap,
  createSelector,
  MetaReducer,
  ActionReducer,
  createFeatureSelector
} from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { getParamForRoute } from '../helpers/getParamForRoute';

import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as fromTodos from './reducers/todos.reducer';

export interface AppState {
  todos: fromTodos.State;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodos.reducer,
  router: routerReducer
};

// console.log all actions
export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];

const selectTodosState = createFeatureSelector('todos');
const selectRouterState = createFeatureSelector('router');

const selectAllTodos = createSelector(
  selectTodosState,
  fromTodos.selectors.selectAll
);

const selectActiveTodos = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => todo.obj_status === 'active')
);

const selectTodosEntities = createSelector(
  selectTodosState,
  fromTodos.selectors.selectEntities
);

const selectTodoById = id => createSelector(
  selectTodosEntities,
  entities => entities[id],
);

const selectTodoForCurrentRoute = createSelector(
  selectTodosEntities,
  selectRouterState,
  (entities, routerState: RouterReducerState) => {
    const todoId = getParamForRoute(routerState.state.root, 'id');
    return entities[todoId];
  }
);

export const todosSelectors = {
  selectActiveTodos,
  selectTodoById,
  selectTodoForCurrentRoute
};
