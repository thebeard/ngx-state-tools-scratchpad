import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../decorators';
import { Todo } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  @Store()
  todo$!: Observable<Todo>;

  getTodo!: () => Todo;
  setTodo!: (todo: Todo) => void;
}
