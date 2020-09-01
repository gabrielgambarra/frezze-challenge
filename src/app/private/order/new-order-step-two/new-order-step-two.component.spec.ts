import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderStepTwoComponent } from './new-order-step-two.component';

describe('NewOrderStepOneComponent', () => {
  let component: NewOrderStepTwoComponent;
  let fixture: ComponentFixture<NewOrderStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderStepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
