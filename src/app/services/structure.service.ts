import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import {Structure} from 'app/models/structure';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  private apiServerUrl = environment.apiBaseUrl ;

  constructor(private http :  HttpClient) { }

  public getStructures (): Observable<Structure[]>{
      return this.http.get<Structure[]>(`${this.apiServerUrl}Structure/find-all-structure`);
    }

    public addStructure (structure:Structure):Observable<Structure>{
      return this.http.post<Structure> (`${this.apiServerUrl}Structure/add-structure`, structure);
      
    }

    public updateStructure( structure :Structure):Observable<Structure[]>{
     return this.http.put<Structure[]> (`${this.apiServerUrl}Structure/update-structure`, structure );
    }

    public deleteStructure (ou:string):Observable<void>{
      return this.http.delete<void> (`${this.apiServerUrl}Structure/delete-structure-by-ou/${ou}` );
    }
}
