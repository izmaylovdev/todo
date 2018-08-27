import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoComponent } from './item-info.component';
import { RouterTestingModule } from '@angular/router/testing';

import MOCK_TODO from '../../../assets/mock-todo';

describe('ItemInfoComponent', () => {
  let component: ItemInfoComponent;
  let fixture: ComponentFixture<ItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ItemInfoComponent ]
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


});
