import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStatusModalComponent } from './new-status-modal.component';

describe('NewStatusModalComponent', () => {
  let component: NewStatusModalComponent;
  let fixture: ComponentFixture<NewStatusModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStatusModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
