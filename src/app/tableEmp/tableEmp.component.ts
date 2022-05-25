import { EmployeeSService } from './../services/employee-s.service';
import { Component, OnInit } from '@angular/core';
import { Employee} from './../models/employee'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-tableEmp',
  templateUrl: './tableEmp.component.html',
  styleUrls: ['./tableEmp.component.css']
})
export class TableEmpComponent implements OnInit {
    display = "none";
    public employees:Employee[];
    public updateEmployee : Employee;
    public deleteEmployee: Employee;



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

  public onUpdateEmployee (employee: Employee): void {
    
    this.employeeSService.updateEmployee(employee).subscribe(
      (response: Employee []) => {
        console.log(response);
        this.getEmployees();
      },
      (error : HttpErrorResponse) =>{
        alert (error.message);
      }
    );

  }

  public onDeleteEmployee (uid:string ) :void {
    this.employeeSService.deleteEmployee(uid).subscribe (
      (response :void ) =>{
        console.log(response);
        this.getEmployees();

      },
      (error : HttpErrorResponse) => {
        alert (error.message);
      },
    );
  }

ngOnInit() {
    this.getEmployees();
}


}