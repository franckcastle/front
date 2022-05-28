import { EmployeeSService } from './../services/employee-s.service';
import { Component, OnInit } from '@angular/core';
import { Employee} from './../models/employee'
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-tableEmp',
  templateUrl: './tableEmp.component.html',
  styleUrls: ['./tableEmp.component.css']
})
export class TableEmpComponent implements OnInit {
    public employees:Employee[];
    public updateEmployee : Employee;
    public deleteEmployee: Employee;
   public userUid ;
   employee:Employee ;




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


recupererId(uid:number) {
  this.userUid=uid;
  console.log("userId = " ,this.userUid)   ;
this.prepareUpdateForm();

}

employeeUpdateForm = new FormGroup( {

  id: new FormControl(''),
  cn: new FormControl(''),
uid: new FormControl({value:'',disabled:true}),
govCNRPS:new FormControl(''),
sn:new FormControl(''),
mail:new FormControl(''),

});

prepareUpdateForm() {
  
this.employeeUpdateForm.setValue({

id:this.employee.id,
uid:this.employee.uid,
cn:this.employee.cn,
govCNRPS:this.employee.govCNRPS,
mail:this.employee.mail,
sn:this.employee.sn,

})  
}
onSubmit(){
 this.employee.id = this.employeeUpdateForm.value.id;
this.employee.uid= this.employeeUpdateForm.value.uid;
this.employee.cn= this.employeeUpdateForm.value.cn;
this.employee.govCNRPS= this.employeeUpdateForm.value.govCNRPS;
this.employee.mail= this.employeeUpdateForm.value.mail;
this.employee.sn= this.employeeUpdateForm.value.sn;
this.employeeSService.updateEmployee(this.employee).subscribe() ;
}
  
}
