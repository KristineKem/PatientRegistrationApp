import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientService } from 'src/app/patient-service.service';

export interface Patient {
  pName: string,
  code: string,
  town: string,
  sex: string,
  doctor: string
}

@Component({
  selector: 'app-add-patient-button',
  templateUrl: './add-patient-button.component.html',
  styleUrls: ['./add-patient-button.component.css']
})
export class AddPatientButtonComponent {

  buttonText = "Add new patient";
  showForm: boolean = false;
  showAlert: boolean = false;
  showSave: boolean = true;
  showCancel: boolean = true;

  addPatient = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),
    town: new FormControl(''),
    sex: new FormControl(''),
    doctor: new FormControl('')
  });

  constructor(private modalService: NgbModal, private patientService: PatientService) {}

  open(content:any) {
      this.showForm = true;
      this.modalService.open(content);
      this.showSave = true;
      this.showCancel = true;
      this.showAlert = false;
    }

  onSave(){
      this.patientService.addPatient(this.addPatient.getRawValue()).subscribe((res: {}) =>{
        JSON.stringify(this.addPatient.value);
      },
      error => {alert('Something went wrong. Please, try again.')});
      this.showAlert = true;
      this.showSave = false;
      this.showCancel = false;
      this.addPatient.reset({});
    }
    
  onAlertClose(){
      this.showAlert = false;
    }
  }

