import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { StoredSelection, StoredList } from '../decorators';
import { Todo } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  @StoredSelection()
  todo$!: Observable<Todo>;

  getTodo!: () => Todo;
  setTodo!: (todo: Todo) => void;

  @StoredList()
  todos$!: Observable<Todo[]>;

  addTodos!: (todo: Todo[]) => void;
  getTodos!: () => Todo[];

  todoCount$ = this.todos$.pipe(map(todos => todos.length));
}
