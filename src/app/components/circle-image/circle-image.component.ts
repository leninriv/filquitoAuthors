import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'circle-image',
  templateUrl: './circle-image.component.html',
  styleUrls: ['./circle-image.component.scss']
})
export class CircleImageComponent implements OnInit {
  @Input() collapsed = true;
  @Input() image = '';
  @Output() imagePress = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onImagePress(): void {
    this.imagePress.emit();
  }

}
