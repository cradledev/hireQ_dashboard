import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Talent } from 'src/app/models/talent.model';
import { ConfigService } from 'src/app/services/config/config.service';
import { TalentsService } from 'src/app/services/talents/talents.service';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {

  talents: any = [];

  itemsCount = 0;
  itemsPage = 1;
  itemsPerPage = 5;

  pageLengthForm: FormGroup;
  pageLengthList: number[] = [5, 20, 25, 50];
  columns: any = [];
  isPerDetail: boolean = false;
  selectedTalent: Talent = new Talent();
  videoItems: any = [];
  constructor(public configService: ConfigService, private talentService: TalentsService, public fb: FormBuilder) {
    this.pageLengthForm = this.fb.group(
      {
        pageLength: [this.itemsPerPage]
      }
    );
  }

  ngOnInit(): void {
    this.columns = [
      {
        type: "name",
        title: { caption: 'Name', class: '' },
        data: { field: 'complex', class: '' }
      },
      {
        title: { caption: 'Role', class: '' },
        data: { field: 'current_jobTitle', class: '' }
      },
      {
        title: { caption: 'Education', class: '' },
        data: { field: 'education', class: '' }
      },
      {
        type: "phone",
        title: { caption: 'Mobile', class: '' },
        data: { field: 'phone', class: '' }
      }
    ];
    this.getTalents();
  }

  getTalents(): void {
    this.talentService.executeGetQuery(this.configService.config.endpoint + "/users/talents_count").subscribe((data) => {
      this.itemsCount = data.count;
      const page = this.itemsPage;
      const totalPages = Math.ceil(this.itemsCount / this.itemsPerPage);
      if (page >= totalPages) {
        this.itemsPage = totalPages;
      }
      this.talentService.executeGetQueryWithToken(this.configService.config.endpoint + "/talents/talents_all/" + this.itemsPage.toString() + "/" + this.itemsPerPage.toString()).subscribe((data: Talent[]) => {
        this.talents = data;
      });
    });
  }

  // page length select option change
  changePageLength(e: any): void {
    this.pageLength?.setValue(e.target.value, {
      oneself: true,
    });
    this.itemsPerPage = e.target.value;
    this.getTalents();
  }

  // get pageLength formcontrols getter
  get pageLength() {
    return this.pageLengthForm.get('pageLength');
  }
  // pagination onchange 
  onChangePage(page: number): void {
    this.itemsPage = page;
    this.getTalents();
  }

  // select item per talent
  onPeritemSelect(_item: any): void {
    console.log(_item);
    if (_item?.video_id != null && _item?.video_id != "") {
      this.talentService.executeGetQueryWithToken(this.configService.config.endpoint + "/videos/" + _item.video_id.toString()).subscribe(data => {
        data.v_data.map((element: any) => {
          this.videoItems.push({ 'name': element.description, 'src': this.configService.config.hostAddress + element.url, 'type': 'video/mp4' });
        });
        this.isPerDetail = true;
        this.selectedTalent = _item;
      });
    } else {
      
      this.isPerDetail = true;
      this.selectedTalent = _item;
    }

  }

  // close modal func
  onCloseModal(): void {
    this.isPerDetail = false;
    this.selectedTalent = new Talent();
    this.videoItems = [];
  }
}
