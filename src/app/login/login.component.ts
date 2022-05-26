import { Component, OnInit } from '@angular/core';
import { EmployeeSService } from 'app/services/employee-s.service';
import { Employee} from './../models/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  employee = new Employee();
  constructor(private employeeSService : EmployeeSService , private router :Router) { }

  ngOnInit(): void {
  }
  loginEmployee (){
    this.employeeSService.loginEmployee(this.employee).subscribe(
       data =>{console.log (data);
       if (data) {
         this.router.navigateByUrl ('/dashborad')}
         else {console.log("not working")}
         },
       error =>console.log ("exception occured")
    )
  }

}
