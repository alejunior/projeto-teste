// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

// components imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component'
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-datail.component';
import { TaskSearchComponent } from './navbar/task-search/task-search.component';

// services imports
import { TaskService } from "./tasks/shared/task.service";

// modules imports
import { AppRoutingModule } from './app-routing.module';

// in memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTaskDataService } from './in-memry-task-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TasksComponent,
    TaskDetailComponent,
    TaskSearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryTaskDataService)
  ],
  providers: [ 
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
