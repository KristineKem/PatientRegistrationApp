import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PatientService } from 'src/app/patient-service.service';
import { NgIf } from '@angular/common';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';



export interface PatientList {
  id: number,
  name: string,
  code: string,
  town: string,
  sex: string,
  doctor: string
}

@Component({
  selector: 'app-doctor-patients-button',
  templateUrl: './doctor-patients-button.component.html',
  styleUrls: ['./doctor-patients-button.component.css']
})
export class DoctorPatientsButtonComponent {

  buttonText = "Show all doctor patients";
  inputText: string = "";
  showFilter: boolean = false;
  showDocButton: boolean = true;
  showFilteredTable: boolean = false;
  showBasicTable: boolean = true;
  timeout: any = null;
  patientsList: PatientList[] = [];
  filteredList: PatientList[] = [];
  
  constructor(private patientService: PatientService) {}

  onDoctorClick()
  {
    this.showDocButton = false;
    this.showFilter = true;
    this.patientService.getAllPatients().subscribe(data => {
      this.patientsList = data;
    });
  }

  filterTable(){
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.patientService.getByDoctorName(this.inputText).subscribe(data => {
        if(data.length > 0){
          this.filteredList = data;
          console.log(this.filteredList);
        } else {
          (error: any) =>  alert("Error: " + error);
  }})}, 2000);
    this.showBasicTable = false;
    this.showFilteredTable = true;
  }
}
