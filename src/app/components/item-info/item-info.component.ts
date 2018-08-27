import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import TodoItem from '../../core/models/todo-item.model';

@Component({
  selector: 'todo-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemInfoComponent implements OnInit {

  @Input() todo: TodoItem;

  constructor() { }

  ngOnInit() {
  }

}
