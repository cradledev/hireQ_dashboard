import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentsRoutingModule } from './talents-routing.module';
import { TalentsComponent } from './talents.component';


@NgModule({
  declarations: [TalentsComponent],
  imports: [
    CommonModule,
    TalentsRoutingModule
  ],
  exports : [
    TalentsComponent
  ]
})
export class TalentsModule { }
