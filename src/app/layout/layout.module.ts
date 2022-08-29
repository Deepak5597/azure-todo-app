import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../_partials/header/header.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskComponent } from '../task/task.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { TaskService } from '../global/services/task.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgHttpLoaderModule.forRoot(),
    ReactiveFormsModule
  ],
  providers:[TaskService]
})
export class LayoutModule { }
