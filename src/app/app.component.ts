import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'StateManagement';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.todo$.subscribe(console.log);
    this.todoService.setTodo({
      color: 'yellow',
      text: 'Angular state management rules',
      type: 'sticky',
    });
  }
}
