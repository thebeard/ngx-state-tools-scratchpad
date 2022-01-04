import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./routes/default-route').then(m => m.DefaultRouteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
