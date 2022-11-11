import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'collapsable-item',
  templateUrl: './collapsable-item.component.html',
  styleUrls: ['./collapsable-item.component.scss']
})
export class CollapsableItemComponent implements OnInit {

  @ViewChild('divContent') elementView: ElementRef | undefined;
  @Input() itemSelected = '';
  @Input() item: any = {};
  collapsed = true;
  contentHeight = '0px';

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.contentHeight = `${this.elementView?.nativeElement.offsetHeight + 20}px`;
  }

  onAction(): void {
    this.collapsed = !this.collapsed;
  }

}
