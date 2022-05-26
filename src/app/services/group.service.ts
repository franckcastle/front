import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import {Group} from 'app/models/group';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private apiServerUrl = environment.apiBaseUrl ;

  constructor(private http :  HttpClient) {
    
   }

   public getGroups (): Observable<Group[]>{
      return this.http.get<Group[]>(`${this.apiServerUrl}Group/find-all-group`);
    }

    public addGroup (group:Group):Observable<Group>{
      return this.http.post<Group> (`${this.apiServerUrl}Group/add-group`, group);
      
    }

    public updateGroup( group:Group):Observable<Group[]>{
     return this.http.put<Group[]> (`${this.apiServerUrl}Group/update-group`, group );
    }

    public deleteGroup (cn : string):Observable<void>{
      return this.http.delete<void> (`${this.apiServerUrl}Group/delete-group-by-cn/${cn}` );
    }


}
