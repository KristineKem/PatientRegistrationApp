import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientService } from 'src/app/patient-service.service';

@Component({
  selector: 'app-add-patient-button',
  templateUrl: './add-patient-button.component.html',
  styleUrls: ['./add-patient-button.component.css']
})
export class AddPatientButtonComponent {

  buttonText = "Add new patient";
  showForm: boolean = false;
  showAlert: boolean = false;
  closeResult = '';

  constructor(private modalService: NgbModal, private patientService: PatientService) {}

  addPatient = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),
    town: new FormControl(''),
    sex: new FormControl(''),
    doctor: new FormControl('')
  });

   open(content:any) {
      this.showForm = true;
      this.modalService.open(content        
      );
    }

    onSave(){
      this.patientService.addPatient(this.addPatient.getRawValue()).subscribe((res: {}) =>{
        console.log(JSON.stringify(this.addPatient.value));
        JSON.stringify(this.addPatient.value);
      },
      error => {alert('Something went wrong. Please, try again.')});
      this.showAlert = true;
      this.addPatient.reset({});
    }
    
    onAlertClose(){
      this.showAlert = false;
    }
  }

