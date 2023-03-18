import { Injectable } from '@angular/core';

@Injectable()
export class CoolLibService {
  public sayHello(): void {
    console.log('Hello from Cool Lib Service');
  }
}
