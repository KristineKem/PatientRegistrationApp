import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientButtonComponent } from './add-patient-button.component';

describe('AddPatientButtonComponent', () => {
  let component: AddPatientButtonComponent;
  let fixture: ComponentFixture<AddPatientButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPatientButtonComponent]
    });
    fixture = TestBed.createComponent(AddPatientButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
