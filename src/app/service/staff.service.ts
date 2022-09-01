import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient) { }

  public getstaff(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:8080/getbystaff",admin)
  }


}
