import { EmployeeSService } from './../services/employee-s.service';
import { Component, OnInit } from '@angular/core';
import { Employee} from './../models/employee'
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-tableEmp',
  templateUrl: './tableEmp.component.html',
  styleUrls: ['./tableEmp.component.css']
})
export class TableEmpComponent implements OnInit {
    display = "none";
  public employees:Employee[];



constructor( private employeeSService : EmployeeSService) { }

  public getEmployees() : void {
    this.employeeSService.getEmployees().subscribe(
     ( response: Employee[] )=>{
      this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert (error.message);
      }

    );

  }

ngOnInit() {
    this.getEmployees();
}
 openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

}
