import { Component } from '@angular/core';
import { Routes } from '@angular/router';


import { AddPatientButtonComponent } from '../buttons/add-patient-button/add-patient-button.component';
import { AllPatientsButtonComponent } from '../buttons/all-patients-button/all-patients-button.component';
import { DoctorPatientsButtonComponent } from '../buttons/doctor-patients-button/doctor-patients-button.component';

const routes: Routes = [
  { path: 'add', component: AddPatientButtonComponent },
  { path: 'all', component: AllPatientsButtonComponent },
  { path: 'bydoctor', component: DoctorPatientsButtonComponent }
];

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})

export class ActionsComponent {

  
}
