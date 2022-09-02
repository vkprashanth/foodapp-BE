import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  result:any
  registeredRole:any
  admin = new Admin()
  constructor(private admin1:AdminService,private route:Router) { }
  requiredRoleAdmin='Admin'
  loginadminID:any
  ngOnInit(): void {
    localStorage.setItem('requiredRoleAdmin',this.requiredRoleAdmin)
  }
  
  onlogin(form:NgForm){
    this.admin1.loginuser(this.admin).subscribe((res)=>{
    this.result=res
    this.result.reqisteredRole=this.result.role
    this.loginadminID=this.result.id
    console.log(this.loginadminID);
    localStorage.setItem('loginadminID',this.loginadminID)
    localStorage.setItem('registeredRole',this.registeredRole)
    window.alert("Logged in as Admin")
    },error=>{  
    alert("Invalid Details")
    })

    
    this.route.navigate(['home'])



  
  }
  

  

}
