import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from 'cool-lib/components/calendar';
import { TextfieldComponent } from 'cool-lib/components/textfield';
import { CoolLibService } from 'cool-lib/services';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalendarComponent, TextfieldComponent],
  providers: [CoolLibService],
  bootstrap: [AppComponent],
})
export class AppModule {}
