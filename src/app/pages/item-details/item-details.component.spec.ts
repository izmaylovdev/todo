import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsComponent } from './item-details.component';
import { ItemInfoComponent } from '../../components/item-info/item-info.component';
import { MaterialModule } from '../../material.module';
import { EditableTextComponent } from '../../components/editable-text/editable-text.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import TodoItem from '../../core/models/todo-item.model';
import { Store, Action } from '@ngrx/store';
import { MOCK_TODO } from '../../../assets/mock-todo';
import { ActivatedRoute } from '@angular/router';
import { LoadTodoAction, UpdateTodoAction } from '../../core/store/actions/todos.actions';

class ActivatedRouteStub {

  private _sub = new ReplaySubject<Map<string, string>>(1);
  private _map = new Map();

  constructor() {
    this._map.set('id', '1');
    this._sub.next(this._map);
  }

  get paramMap() {
    return this._sub.asObservable();
  }

  set id(val) {
    this._map.set('id', val);
    this._sub.next(this._map);
  }
}

class StoreStub {
  actionSubject = new Subject<Action>();
  todoSubject = new ReplaySubject<TodoItem>(1);

  dispatch(action: Action) {
    this.actionSubject.next(action);

    if (action instanceof LoadTodoAction) {
      this.todoSubject.next(MOCK_TODO);
    }
  }

  select(selector): Observable<TodoItem> {
    return this.todoSubject.asObservable();
  }
}

describe('ItemDetailsComponent', () => {
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, RouterTestingModule ],
      declarations: [ ItemDetailsComponent, ItemInfoComponent, EditableTextComponent ],
      providers: [
        { provide: Store, useValue: new StoreStub },
        { provide: ActivatedRoute, useValue: new ActivatedRouteStub },
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should dispath "LoadTodoAction" on params change', () => {
    const route = TestBed.get(ActivatedRoute) as ActivatedRouteStub;
    const store = TestBed.get(Store) as StoreStub;

    store.actionSubject.subscribe(action =>
      expect(action).toEqual(new LoadTodoAction(2))
    );

    route.id = '2';
  });


  it('should dispath "UpdateTodoAction" on todo name change', () => {
    const store = TestBed.get(Store) as StoreStub;
    const updatedTodo = { ...MOCK_TODO, name: 'new name' };

    store.actionSubject.subscribe(action => {
      expect(action).toEqual(new UpdateTodoAction(updatedTodo));
    });

    component.onNameChange(updatedTodo.name);
  });


  it('should display todo description', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.item-details__description').textContent).toContain(MOCK_TODO.description);
  });

});
