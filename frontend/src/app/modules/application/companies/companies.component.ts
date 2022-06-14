import { Component, OnInit } from '@angular/core';

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
  isPerDetail: boolean = false;
  selectedCompany = new CompanyModel();

  // selected company vidoe source object
  currentVideo: any;
  isVideoPlayerModal: boolean = false;
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
      if (this.itemsCount > 0) {
        const page = this.itemsPage;
        const totalPages = Math.ceil(this.itemsCount / this.itemsPerPage);
        if (page >= totalPages) {
          this.itemsPage = totalPages;
        }
        this.companyService.getCompanies(this.configService.config.endpoint + "/users/company_all/" + this.itemsPage.toString() + "/" + this.itemsPerPage.toString()).subscribe((data: CompanyModel[]) => {
          this.companies = data;
        });
      } else {
        this.companies = [];
      }
      
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
  onSelectCompany(id: any): void {
    this.isSelectedCompany = true;
    this.selectedCompany = this.companies[this.companies.findIndex(item => item.id == id)]
    console.log(this.selectedCompany);
  }

  // hide company detail board
  onCloseDetailCompany(id: any): void {
    this.isSelectedCompany = false;
    this.selectedCompany = new CompanyModel();
  }

  // on company detail modal
  onMoreDetail(): void {
    this.isPerDetail = true;
  }

  // closing modal
  onCloseModal(): void {
    this.isPerDetail = false;
  }

  // show video play modal
  onShowVideoPlayerModal(): void {
    this.isVideoPlayerModal = true;
    this.currentVideo = {
      "name": this.selectedCompany?.name,
      "src": this.configService.config.hostAddress + this.selectedCompany?.video,
      "type": "video/mp4"
    };
  }
  // hide video palyer modal
  onHideVideoPlayerModal(): void {
    this.isVideoPlayerModal = false;
    this.currentVideo = {
      "name": "",
      "src": "",
      "type": "video/mp4"
    };
  }
}
