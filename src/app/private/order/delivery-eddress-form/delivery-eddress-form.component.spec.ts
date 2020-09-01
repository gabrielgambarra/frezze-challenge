import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryEddressFormComponent } from './delivery-eddress-form.component';

describe('DeliveryEddressFormComponent', () => {
  let component: DeliveryEddressFormComponent;
  let fixture: ComponentFixture<DeliveryEddressFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryEddressFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryEddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
