import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
        let data = {...group, members : group.members.split(' ,') }
        console.log(data)
      this.groupService.updateGroup(data).subscribe(
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

/*groupUpdateForm = new FormGroup( {

  id: new FormControl(''),
  cn: new FormControl(''),
  description: new FormControl(''),
  members: new FormControl(''),
});

prepareUpdateForm() {
  
this.groupUpdateForm.setValue({
id:this.updateGroup.id,
description:this.updateGroup.description,
cn:this.updateGroup.cn,
members:this.updateGroup.members,



})  
}*/

}
