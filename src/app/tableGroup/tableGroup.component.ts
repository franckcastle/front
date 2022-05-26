import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Group } from 'app/models/group';
import { GroupService } from 'app/services/group.service';


@Component({
  selector: 'app-tableGroup',
  templateUrl: './tableGroup.component.html',
  styleUrls: ['./tableGroup.component.css']
})
export class TableGroupComponent implements OnInit {
  public group : Group[];


constructor( private employeeSService : GroupService ) { }

 
  public getGroups() : void {
    this.employeeSService.getGroups().subscribe(
     ( response: Group[] )=>{
      this.group = response;
      },
      (error: HttpErrorResponse) => {
        alert (error.message);
      }

    );
    }

ngOnInit() {
    
    this.getGroups();
}

}
