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
  closeResult = '';

  constructor(private modalService: NgbModal, private patientService: PatientService) {}

  addPatient = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),
    town: new FormControl(''),
    sex: new FormControl(''),
    dName: new FormControl(''),
    dCode: new FormControl(''),
    profile: new FormControl(''),
    dTown: new FormControl('')
  });

   open(content:any) {
      this.showForm = true;
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
    }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

    onSave(){
      this.patientService.addPatient(this.addPatient).subscribe(res =>{
        alert(res.toString());
      })
    }    
  }

