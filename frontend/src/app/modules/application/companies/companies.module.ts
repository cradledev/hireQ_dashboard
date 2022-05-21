import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';


@NgModule({
  declarations: [CompaniesComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ],
  exports : [
    CompaniesComponent
  ]
})
export class CompaniesModule { }
