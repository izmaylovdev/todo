import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTextComponent } from './editable-text.component';
import { ChangeDetectionStrategy } from '@angular/core';

const MOCK_TEXT = 'Some text for testing';

describe('EditableTextComponent', () => {
  let component: EditableTextComponent;
  let fixture: ComponentFixture<EditableTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableTextComponent ]
    })
    .overrideComponent(EditableTextComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTextComponent);
    component = fixture.componentInstance;
    component.text = MOCK_TEXT;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display input text', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.text').textContent).toContain(MOCK_TEXT);
  });

  it('should display editor on click by text', () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('.text').click();
    fixture.detectChanges();
    expect(compiled.querySelector('input').value).toContain(MOCK_TEXT);
  });

  it('should dispatch "textChanged" event on text change', () => {
    const compiled = fixture.debugElement.nativeElement;

    component.editMode = true;
    fixture.detectChanges();
    const input = compiled.querySelector('input');

    let text;
    component.textChange.subscribe(newText => text = newText);

    input.value = 'Changed text';
    const changeEvent = new Event('change');
    input.dispatchEvent(changeEvent);

    expect(text).toContain('Changed text');
  });
});
