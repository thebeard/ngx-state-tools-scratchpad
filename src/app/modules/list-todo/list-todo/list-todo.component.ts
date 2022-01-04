import { Component } from '@angular/core';
import { TodoService } from '../../../services';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent {
  constructor(public Todo: TodoService) {}
}
