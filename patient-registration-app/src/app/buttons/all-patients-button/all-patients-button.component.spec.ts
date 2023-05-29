import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPatientsButtonComponent } from './all-patients-button.component';

describe('AllPatientsButtonComponent', () => {
  let component: AllPatientsButtonComponent;
  let fixture: ComponentFixture<AllPatientsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllPatientsButtonComponent]
    });
    fixture = TestBed.createComponent(AllPatientsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
