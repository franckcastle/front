import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'app/models/employee';
import { EmployeeSService } from 'app/services/employee-s.service';

@Component({
  selector: 'app-form-emp',
  templateUrl: './form-emp.component.html',
  styleUrls: ['./form-emp.component.scss']
})
export class FormEmpComponent implements OnInit {

  public employees:Employee[];

  constructor(private employeeSService : EmployeeSService) { }

  public onAddEmployee (addForm: NgForm): void {
    this.employeeSService.addEmployee(addForm.value).subscribe(
      (response : Employee ) =>{
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert (error.message);
      }
    );
  }

  ngOnInit(): void {
  }

}
