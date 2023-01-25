import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabbarItem } from 'src/app/models/tabbarItem';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {

  @Input() items: TabbarItem[];
  @Input() active: TabbarItem;
  @Output() tabClick: EventEmitter<TabbarItem> = new EventEmitter();
  // @Input() listUser: User[];

  constructor() {
    console.log("items costr",this.items);

   }

  ngOnInit(): void {

    console.log("items init",this.items);
  }


  tabHandler(item: TabbarItem) {
    console.log("item",item);
    this.tabClick.emit(item);
  }
}
