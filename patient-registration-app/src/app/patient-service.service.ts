import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ActionsComponent } from './actions/actions.component';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  readonly apiUrl = "http://localhost:5030/admin-api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  addPatient(patient: any) {
    return this.http.post(this.apiUrl + '/newPatient', patient);
  }

  getAllPatients(): Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/getAll');
  }

  deletePatient(code: any){
    return this.http.delete(this.apiUrl + '/deletePatient/' + code);
  }

  getByDoctorName(doctor: any): Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/getPatientsByDoctor/' + doctor);
  }
}
