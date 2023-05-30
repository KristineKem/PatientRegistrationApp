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
  patientsList: PatientList[] = [];
  _filterText: string = '';
  filteredList: PatientList[] = [];

  get filterText(){
    return this._filterText;
  }

  set filterText(value: string){
    this._filterText = value;
    this.filteredList = this.filterData(value);
    this.showFilteredTable = true;
  }

  constructor(private patientService: PatientService) {}

  ngOnInit(){
    
  }

  onDoctorClick()
  {
    this.showDocButton = false;
    this.showFilter = !this.showFilter;
    this.patientService.getAllPatients().subscribe(data => {
      this.patientsList = data;
    });
  }

  filterData(inputText: string) {
    let searchText = inputText.toLowerCase();
    if (inputText === '') {
      return this.patientsList;
    } else {
      return this.patientsList.filter(patient => patient.doctor.toLowerCase().includes(searchText.toString().toLowerCase()));
    }
  }
}
