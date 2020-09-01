import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderStepThreeComponent } from './new-order-step-three.component';

describe('NewOrderStepThreeComponent', () => {
  let component: NewOrderStepThreeComponent;
  let fixture: ComponentFixture<NewOrderStepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderStepThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
