import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PatientService } from 'src/app/patient-service.service';
import { NgIf } from '@angular/common';

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
  showFilter: boolean = false;
  showDocButton: boolean = true;
  showFilteredTable: boolean = false;
  showBasicTable: boolean = true;
  patientsList: PatientList[] = [];
  filteredList: PatientList[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(){
    
  }

  onDoctorClick()
  {
    this.showDocButton = false;
    this.showFilter = true;
    this.patientService.getAllPatients().subscribe(data => {
      this.patientsList = data;
    });
  }

  onKey(value: string){
    let searchText = value.toLowerCase();
    if(value === "") {
      return this.patientsList;
    } else {
      return this.patientsList.filter(patient => patient.doctor.toLowerCase().includes(searchText));
    }

    

  }

  filterData(inputText: string) {
    let searchText = inputText.toLowerCase();
    if (inputText === '') {
      return this.patientsList;
    } else {
      return this.patientsList.filter(patient => patient.doctor.toLowerCase().includes(searchText.toLowerCase()));
    }
  }
}
