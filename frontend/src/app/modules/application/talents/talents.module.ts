import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentsRoutingModule } from './talents-routing.module';
import { TalentsComponent } from './talents.component';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from 'src/app/components/grid/grid.module';
import { VdoPlayerModule } from 'src/app/components/vdo-player/vdo-player.module';


@NgModule({
  declarations: [TalentsComponent],
  imports: [
    CommonModule,
    TalentsRoutingModule,
    PaginationModule,
    ReactiveFormsModule,
    FormsModule,
    GridModule,
    VdoPlayerModule
  ],
  exports : [
    TalentsComponent
  ]
})
export class TalentsModule { }
