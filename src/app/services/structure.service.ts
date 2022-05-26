import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import {Structure} from 'app/models/structure';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StructureService {
    deleteStructure(ou: string) {
        throw new Error('Method not implemented.');
    }
  private apiServerUrl = environment.apiBaseUrl ;

  constructor(private http :  HttpClient) { }

  public getStructures (): Observable<Structure[]>{
      return this.http.get<Structure[]>(`${this.apiServerUrl}Structure/find-all-structure`);
    }

    public addGroup (group:Structure):Observable<Structure>{
      return this.http.post<Structure> (`${this.apiServerUrl}Structure/add-structure`, Structure);
      
    }

    public updateGroup( group:Structure):Observable<Structure[]>{
     return this.http.put<Structure[]> (`${this.apiServerUrl}Structure/update-structure`, Structure );
    }

    public deleteGroup (ou : string):Observable<void>{
      return this.http.delete<void> (`${this.apiServerUrl}Structure/delete-structure-by-ou${ou}` );
    }
}
