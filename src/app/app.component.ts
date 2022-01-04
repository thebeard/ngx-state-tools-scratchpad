import { Component, OnInit } from '@angular/core';
import { TodoService } from './services';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.addTodos([
      {
        color: 'yellow',
        text: 'Angular state management rules',
        type: 'sticky'
      }
    ]);
  }
}
