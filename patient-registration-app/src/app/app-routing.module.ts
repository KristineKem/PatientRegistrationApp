import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { AddPatientButtonComponent } from './buttons/add-patient-button/add-patient-button.component';
import { AllPatientsButtonComponent } from './buttons/all-patients-button/all-patients-button.component';
import { DoctorPatientsButtonComponent } from './buttons/doctor-patients-button/doctor-patients-button.component';


const routes: Routes = [
  { path: 'actions', component: ActionsComponent},
  { path: 'add', component: AddPatientButtonComponent },
  { path: 'all', component: AllPatientsButtonComponent },
  { path: 'bydoctor', component: DoctorPatientsButtonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
