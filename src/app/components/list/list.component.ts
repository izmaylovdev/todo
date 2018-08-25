import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import TodoItem from '../../core/models/todo-item.model';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() items: TodoItem[];

  constructor() { }

  ngOnInit() {
  }

}
