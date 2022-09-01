import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public loginuser(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:8080/getby",admin)
  }


  getdata(){
    return this.http.get("http://localhost:8080/admin")
  }
}
