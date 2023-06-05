import { Component } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent {
  items = [
    { title: '', content: 'Content 1', expanded: false } 
   
  ];

  toggleItem(item: any) {
    item.expanded = !item.expanded;
  }
}