import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ScriptService } from 'src/app/services/script/script.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title,
    private scriptLoaderService: ScriptService,
  ) { }


  ngOnInit(): void {

  }

  
}
