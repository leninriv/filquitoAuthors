import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CircleImageComponent } from './components/circle-image/circle-image.component';
import { CollapsableItemComponent } from './components/collapsable-item/collapsable-item.component';
import { CountryComponent } from './components/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleImageComponent,
    CollapsableItemComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
