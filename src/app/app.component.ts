import { Component } from '@angular/core';
import { CoolLibService } from 'cool-lib/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rainbow';

  constructor(private coolLibService: CoolLibService) {
    this.coolLibService.sayHello();
  }
}
