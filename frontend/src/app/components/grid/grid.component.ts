import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Input() items : any;
  @Input() columns : any;
  @Input() itemsCount : any;
  
  @Output() clickRow = new EventEmitter<any>();
  constructor(public configService : ConfigService) { }

  selectItem(item : any) : void {
    this.clickRow.emit(item);
    // console.log(item);
  }
}
