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
  public updateGroup: Group;
  private abc: string;


constructor( private groupService : GroupService ) { }

 
  public getGroups() : void {
    this.groupService.getGroups().subscribe(
     ( response: Group[] )=>{
      this.group = response;
      },
      (error: HttpErrorResponse) => {
        alert (error.message);
      }

    );

    }
      public onUpdateGroup (group : Group ): void {
      this.groupService.updateGroup(group).subscribe(
      (response: Group []) => {
        console.log(response);
        this.getGroups();
      },
      (error : HttpErrorResponse) =>{
        alert (error.message);
      }
    );

  }
    public onDeleteGroup (cn:string ) :void {
    this.groupService.deleteGroup(cn).subscribe (
      (response :void ) =>{
        console.log(response);
        this.getGroups();

      },
      (error : HttpErrorResponse) => {
        alert (error.message);
      },
    );
  }

ngOnInit() {
    
    this.getGroups();
    //this.abc = this.groupService.id;
}

}
