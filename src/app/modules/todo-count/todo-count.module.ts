import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCountComponent } from './todo-count/todo-count.component';

@NgModule({
  declarations: [TodoCountComponent],
  imports: [CommonModule],
  exports: [TodoCountComponent]
})
export class TodoCountModule {}
