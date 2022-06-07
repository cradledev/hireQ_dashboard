import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { CompanyService } from 'src/app/services/company/company.service';
import { GridCompanyModule } from '../../../components/grid-company/grid-company.module';
import { PaginationModule } from '../../../components/pagination/pagination.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompaniesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CompaniesRoutingModule,
    GridCompanyModule,
    PaginationModule,
  ],
  exports : [
    CompaniesComponent
  ],
  providers : [
    CompanyService,
  ]
})
export class CompaniesModule { }
