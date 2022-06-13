import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { JobsService } from 'src/app/services/jobs/jobs.service';
import { Job } from 'src/app/models/job.model';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs : any = [];

  itemsCount = 0;
  itemsPage = 1;
  itemsPerPage = 5;

  pageLengthForm: FormGroup;
  pageLengthList: number[] = [5, 20, 25, 50];
  columns : any = [];
  isPerDetail : boolean = false;
  selectedJob : Job = new Job();
  constructor(public configService : ConfigService, private jobService : JobsService, public fb : FormBuilder) { 
    this.pageLengthForm = this.fb.group(
      {
        pageLength : [this.itemsPerPage]
      }
    );
  }

  ngOnInit(): void {
    
    this.columns = [
      {
        type : "jobId",
        title: { caption: 'ID', class: '' },
        data: { field: 'id', class: '' }
      },
      {
        type : 'date',
        title: { caption: 'Date Applied', class: '' },
        data: { field: 'created_at', class: '' }
      },
      {
        type: 'company',
        title: { caption: 'Company', class: '' },
        data: { field: 'complex', class: ''}
      },
      {
        title: { caption: 'Title', class: '' },
        data: { field: 'title', class: '' }
      },
      {
        title: { caption: 'Status', class: '' },
        data: { field: 'job_status', class: '' }
      },
    ];
    this.getJobs();
  }

  getJobs() : void {
    this.jobService.executeGetQuery(this.configService.config.endpoint + "/jobs/jobs_count").subscribe((data) => {
      this.itemsCount = data.count;
      const page = this.itemsPage;
      const totalPages = Math.ceil(this.itemsCount / this.itemsPerPage);
      if (page >= totalPages) {
        this.itemsPage = totalPages;
      }
      this.jobService.executeGetQueryWithToken(this.configService.config.endpoint + "/jobs/pages_by_user/" + this.itemsPage.toString() + "/" + this.itemsPerPage.toString()).subscribe((data : Job[]) => {
        this.jobs = data;
      });
    });
  }

  // page length select option change
  changePageLength(e : any) : void {
    this.pageLength?.setValue(e.target.value, {
      oneself: true,
    });
    this.itemsPerPage = e.target.value;
    this.getJobs();
  }

  // get pageLength formcontrols getter
  get pageLength() {
    return this.pageLengthForm.get('pageLength');
  }
  // pagination onchange 
  onChangePage(page : number) : void {
    this.itemsPage = page;
    this.getJobs();
  }

  // select per item 
  onItemSelect(_item : any) : void {
    console.log(_item);
    this.selectedJob = _item;
    this.isPerDetail = true;
  }

  // close detail modal
  onCloseModal() : void {
    this.selectedJob = new Job();
    this.isPerDetail = false;
  }
}
