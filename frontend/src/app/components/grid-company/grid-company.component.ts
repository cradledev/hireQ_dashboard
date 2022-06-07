import { Component, Input, Injector, Output, EventEmitter } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
@Component({
  selector: 'app-grid-company',
  templateUrl: './grid-company.component.html',
  styleUrls: ['./grid-company.component.css']
})
export class GridCompanyComponent{
  @Input() items : any;
  @Input() itemsCount : any;

  @Output() selectItem = new EventEmitter<number>();
  configService : ConfigService;
  constructor(private injector : Injector) { 
    this.configService = this.injector.get(ConfigService);
  }

  selectCompany(id : number) : void {
    this.selectItem.emit(id);
  }
}
