import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Group } from 'app/models/group';
import { GroupService } from 'app/services/group.service';

@Component({
  selector: 'app-form-grp',
  templateUrl: './form-grp.component.html',
  styleUrls: ['./form-grp.component.scss']
})
export class FormGrpComponent implements OnInit {
  public group: Group[];


  constructor(private groupService : GroupService) { }

  public onAddGroup (addForm: NgForm): void {
    this.groupService.addGroup(addForm.value).subscribe(
      (response : Group ) =>{
        console.log(response);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        addForm.reset();
      }
    );
  }

  ngOnInit(): void {
  }

}
