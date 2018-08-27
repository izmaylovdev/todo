import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoComponent } from './item-info.component';
import { RouterTestingModule } from '@angular/router/testing';

import MOCK_TODO from '../../../assets/mock-todo';
import { ChangeDetectionStrategy } from '@angular/core';

describe('ItemInfoComponent', () => {
  let component: ItemInfoComponent;
  let fixture: ComponentFixture<ItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ItemInfoComponent ]
    })
    .overrideComponent(ItemInfoComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfoComponent);
    component = fixture.componentInstance;
    component.todo = MOCK_TODO;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display due date', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.item-info__field:first-child').textContent).toContain('Jul 10, 2025');
  });

  it('shouldn\'t display due date if this field is empty', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.todo = { ...MOCK_TODO, due_date: null };
    fixture.detectChanges();
    expect(compiled.querySelector('.item-info__field:first-child').textContent).not.toContain('Due date');
  });

});
