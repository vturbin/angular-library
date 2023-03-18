import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarComponent } from 'projects/cool-lib/src/lib/components/calendar/public_api';
import { TextfieldComponent } from 'projects/cool-lib/src/lib/components/textfield/public_api';
import { CoolLibService } from 'projects/cool-lib/src/lib/services/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalendarComponent, TextfieldComponent],
  providers: [CoolLibService],
  bootstrap: [AppComponent],
})
export class AppModule {}
