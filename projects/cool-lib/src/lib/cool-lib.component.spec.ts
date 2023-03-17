import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolLibComponent } from './cool-lib.component';

describe('CoolLibComponent', () => {
  let component: CoolLibComponent;
  let fixture: ComponentFixture<CoolLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
