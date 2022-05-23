import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'app/models/employee';
import { environment } from 'environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSService {
  private apiServerUrl = environment.apiBaseUrl ;


  constructor(private http :  HttpClient) { }

    public getEmployees (): Observable<Employee[]>{
      return this.http.get<Employee[]>(`${this.apiServerUrl}User/find-all-user`);
    }

    public addEmployee(employee:Employee):Observable<Employee[]>{
      return this.http.post<Employee[]> (`${this.apiServerUrl}User/add-user`, employee);
    }

    public updateEmployee(employee:Employee):Observable<Employee[]>{
     return this.http.put<Employee[]> (`${this.apiServerUrl}User/update-user`, employee);
    }

    public deleteEmployee(employeeUid: string):Observable<any>{
      return this.http.delete<void> (`${this.apiServerUrl}User/delete-user-by-uid${employeeUid}`);
    }
}
