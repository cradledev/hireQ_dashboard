import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { JobsService } from 'src/app/services/jobs/jobs.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalJobsCount : number = 0;
  totalTalentsCount : number = 0;
  totalCompaniesCount : number = 0;

  constructor(
    private meta: Meta,
    private titleService: Title,
    private jobService : JobsService,
    public configService : ConfigService,
    private router : Router
  ) { }
  
  ngOnInit(): void {
    this.getTotalCompaniesCount();
    this.getTotalJobsCount();
    this.getTotalTalentsCount();
  }
  // get total jobs, talents and companies
  getTotalJobsCount() : void {
    this.jobService.executeGetQuery(this.configService.config.endpoint + "/jobs/jobs_count").subscribe(data => {
      this.totalJobsCount = data.count;
    });
  }

  getTotalCompaniesCount() : void {
    this.jobService.executeGetQuery(this.configService.config.endpoint + "/users/companies_count").subscribe(data => {
      this.totalCompaniesCount = data.count;
    });
  }

  getTotalTalentsCount() : void {
    this.jobService.executeGetQuery(this.configService.config.endpoint + "/users/talents_count").subscribe(data => {
      this.totalTalentsCount = data.count;
    });
  }
  
  // go to per page according to click event
  onGotoPage(_pagelink : string) : void {
    switch (_pagelink) {
      case "company":
        // this.router.navigate(['/companies']);
        break;
      case "talents":
        this.router.navigate(['/talents']);
        break;
      case "jobs":
        this.router.navigate(['/jobs']);
        break;
      default:
        break;
    }
  }
  
}
