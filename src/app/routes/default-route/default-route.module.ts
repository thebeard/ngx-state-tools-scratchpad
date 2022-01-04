import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AddTodoModule } from '../../modules/add-todo';
import { ListTodoModule } from '../../modules/list-todo';
import { TodoCountModule } from '../../modules/todo-count';
import { DefaultRouteComponent } from './default-route/default-route.component';

const routes: Route[] = [
  {
    path: '',
    component: DefaultRouteComponent
  }
];

@NgModule({
  declarations: [DefaultRouteComponent],
  imports: [
    AddTodoModule,
    CommonModule,
    ListTodoModule,
    MatToolbarModule,
    RouterModule.forChild(routes),
    TodoCountModule
  ]
})
export class DefaultRouteModule {}
