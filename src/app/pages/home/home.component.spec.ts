import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CoreModule } from '../../core/core.module';
import { ListComponent } from '../../components/list/list.component';
import { ListItemComponent } from '../../components/list-item/list-item.component';
import { ItemInfoComponent } from '../../components/item-info/item-info.component';
import { MaterialModule } from '../../material.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CoreModule, MaterialModule, RouterTestingModule ],
      declarations: [ HomeComponent, ListComponent, ListItemComponent, ItemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
