import { Component, OnInit} from '@angular/core';

import { CompanyService } from 'src/app/services/company/company.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { CompanyModel } from 'src/app/models/company-model.model';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: CompanyModel[] = [];
  itemsCount = 0;
  itemsPage = 1;
  itemsPerPage = 4;

  pageLengthForm: FormGroup;
  pageLengthList: number[] = [4, 8, 12, 16];

  isSelectedCompany: boolean = false;
  selectedCompany = new CompanyModel();

  constructor(private companyService: CompanyService, public configService: ConfigService, public fb: FormBuilder) {
    this.pageLengthForm = this.fb.group({
      pageLength: [this.itemsPerPage]
    });
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getAllCompaniesCount(this.configService.config.endpoint + "/users/companies_count").subscribe(data => {
      this.itemsCount = data.count;
      const page = this.itemsPage;
      const totalPages = Math.ceil(this.itemsCount / this.itemsPerPage);
      if (page >= totalPages) {
        this.itemsPage = totalPages;
      }
      this.companyService.getCompanies(this.configService.config.endpoint + "/users/company_all/" + this.itemsPage.toString() + "/" + this.itemsPerPage.toString()).subscribe((data: CompanyModel[]) => {
        this.companies = data;
      });
    });
  }

  onChangePage(page: any): void {
    this.itemsPage = page;
    this.getCompanies();
  }

  // change per page length drop down list
  changePageLength(e: any) {
    this.pageLength?.setValue(e.target.value, {
      oneself: true,
    });
    this.itemsPerPage = e.target.value;
    this.getCompanies();
  }

  // get pageLength formcontrols getter
  get pageLength() {
    return this.pageLengthForm.get('pageLength');
  }

  // select company 
  onSelectCompany(id : any) : void {
    this.isSelectedCompany = true;
    this.selectedCompany = this.companies[this.companies.findIndex(item => item.id == id)]
  }

  // hide company detail board
  onCloseDetailCompany(id : any) : void {
    this.isSelectedCompany = false;
    this.selectedCompany = new CompanyModel();
  }
}
