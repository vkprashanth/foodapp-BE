import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }

  public getmanager(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:8080/getbymanager",admin)
  }

}
