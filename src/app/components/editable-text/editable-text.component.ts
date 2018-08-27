import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'todo-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableTextComponent {

  @Input() text: string;
  @Output() textChange = new EventEmitter<string>();
  @ViewChild('input') input;
  editMode = false;

  constructor() { }

  onTextChange(updatedText: string) {
    this.textChange.emit(updatedText);
    this.turnOffEditMode();
  }

  turnOnEditMode() {
    this.editMode = true;

    // this will make the execution after the above boolean has changed
    setTimeout(() => this.input.nativeElement.focus(), 0);
  }

  turnOffEditMode() {
    this.editMode = false;
  }

}
