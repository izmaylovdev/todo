import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsComponent } from './item-details.component';
import { ItemInfoComponent } from '../../components/item-info/item-info.component';
import { MaterialModule } from '../../material.module';
import { CoreModule } from '../../core/core.module';
import { EditableTextComponent } from '../../components/editable-text/editable-text.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemDetailsComponent', () => {
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, CoreModule, RouterTestingModule ],
      declarations: [ ItemDetailsComponent, ItemInfoComponent, EditableTextComponent ]
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
});
