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
  patientsList: PatientList[] = [];
  searchText: string = "";
  filteredList?: PatientList[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(){
    
  }

  onDoctorClick()
  {
    this.showDocButton = false;
    this.showFilter = !this.showFilter;
    this.patientService.getAllPatients().subscribe((data: PatientList[]) => {
      this.patientsList = data;
    });
    this.filterData();
  }

  filterData(): void {
    if (this.searchText) {
      this.filteredList = this.patientsList.filter(item =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredList = this.patientsList;
    }
  }
}
