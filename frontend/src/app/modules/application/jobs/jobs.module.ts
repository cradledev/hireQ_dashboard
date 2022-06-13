import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobsService } from 'src/app/services/jobs/jobs.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';
import { GridModule } from '../../../components/grid/grid.module';


@NgModule({
  declarations: [JobsComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    GridModule
  ],
  exports : [
    JobsComponent
  ],
  providers : [
    JobsService
  ]
})
export class JobsModule { }
