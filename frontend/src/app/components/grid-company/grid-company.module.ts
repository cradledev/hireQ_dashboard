import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridCompanyRoutingModule } from './grid-company-routing.module';
import { GridCompanyComponent } from './grid-company.component';


@NgModule({
  declarations: [
    GridCompanyComponent
  ],
  imports: [
    CommonModule,
    GridCompanyRoutingModule
  ],
  exports : [
    GridCompanyComponent
  ]
})
export class GridCompanyModule { }
