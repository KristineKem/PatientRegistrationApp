import { Component } from '@angular/core';
import { PatientService } from 'src/app/patient-service.service';

export interface PatientList {
    id: number,
    name: string,
    code: number,
    town: string,
    sex: string,
    doctor: string
}

@Component({
  selector: 'app-all-patients-button',
  templateUrl: './all-patients-button.component.html',
  styleUrls: ['./all-patients-button.component.css'],
})

export class AllPatientsButtonComponent {

  buttonText = "Show all patients";
  showTable: boolean = false;
  showAllButton: boolean = true;
  patientsList: PatientList[] = [];
  updatedPatientList: PatientList[] = [];

  constructor(private patientService: PatientService) {  }

  onClick() {
    this.showTable = true;;
    this.showAllButton = false;
    this.patientService.getAllPatients().subscribe((data: any) => {
      this.patientsList = data;
    })
  }

  onDelete(code:number) {
    this.patientService.deletePatient(code).subscribe((res) => {
      console.log(res);
      this.onClick();
    });
  }
}
