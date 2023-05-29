import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPatientsButtonComponent } from './doctor-patients-button.component';

describe('DoctorPatientsButtonComponent', () => {
  let component: DoctorPatientsButtonComponent;
  let fixture: ComponentFixture<DoctorPatientsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorPatientsButtonComponent]
    });
    fixture = TestBed.createComponent(DoctorPatientsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
