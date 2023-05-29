import { Component } from '@angular/core';
import {} from '@angular/forms';
import { PatientService } from 'src/app/patient-service.service';

export interface PatientList {
    id: number,
    name: string,
    code: string,
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

  constructor(private patientService: PatientService) {  }

  onClick(): void {
    this.showTable = !this.showTable;
    this.showAllButton = false;
    this.patientService.getAllPatients().subscribe((data: PatientList[]) => {
      this.patientsList = data;
    },
    error => {
      console.log(error);
    }
    )
  }

  onDelete(code:string) {
    this.patientService.deletePatient(code).subscribe(() => 
      this.onClick);
  }

}




