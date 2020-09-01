import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderStepOneComponent } from './new-order-step-one.component';

describe('NewOrderStepOneComponent', () => {
  let component: NewOrderStepOneComponent;
  let fixture: ComponentFixture<NewOrderStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
