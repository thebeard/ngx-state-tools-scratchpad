import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ListTodoComponent } from './list-todo/list-todo.component';

@NgModule({
  declarations: [ListTodoComponent],
  imports: [CommonModule, MatCardModule],
  exports: [ListTodoComponent]
})
export class ListTodoModule {}
