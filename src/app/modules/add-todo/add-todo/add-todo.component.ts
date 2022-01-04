import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../../services';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  color = 'yellow';
  @ViewChild('form') form!: NgForm;
  newTodo!: string;
  type = 'card';

  constructor(private Todo: TodoService) {}

  addTodo() {
    this.Todo.addTodos([
      {
        color: this.color,
        text: this.newTodo,
        type: this.type
      }
    ]);

    this.newTodo = '';
  }
}
