import { Component } from '@angular/core';
import { TodoService } from '../../../services';

@Component({
  selector: 'app-todo-count',
  template: '<span>{{ Todo.todoCount$ | async }} Todos</span>'
})
export class TodoCountComponent {
  constructor(public Todo: TodoService) {}
}
