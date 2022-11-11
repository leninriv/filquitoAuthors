import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  @Input() countryName = '';

  constructor() { }

  ngOnInit(): void {
  }

}
