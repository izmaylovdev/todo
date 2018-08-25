import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import TodoItem from '../../core/models/todo-item.model';

@Component({
  selector: 'todo-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {
  @Input() todo: TodoItem;

  constructor() { }

  ngOnInit() {
  }

}
