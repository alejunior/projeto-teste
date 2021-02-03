import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailComponent } from "./tasks/task-detail/task-datail.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'tasks/:id',
    component: TaskDetailComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
