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
  inputText: string = "";
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

  filterTable(){
    this.showBasicTable = false;    
    this.patientService.getByDoctorName(this.inputText).subscribe(data => {
      if(data.length > 0){
        (error: any) => console.log(error);
      } else {
      this.filteredList = data;
      this.showFilteredTable = true;
  }});    
  }
}
