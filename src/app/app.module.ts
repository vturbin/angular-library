import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TextfieldComponent } from 'cool-lib/components/textfield';
import { CoolLibService } from 'cool-lib/services';
import { CalendarComponent } from 'cool-lib/components/calendar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalendarComponent, TextfieldComponent],
  providers: [CoolLibService],
  bootstrap: [AppComponent],
})
export class AppModule {}
