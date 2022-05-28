import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Structure } from 'app/models/structure';
import { StructureService } from 'app/services/structure.service';

@Component({
  selector: 'app-form-srct',
  templateUrl: './form-srct.component.html',
  styleUrls: ['./form-srct.component.scss']
})
export class FormSrctComponent implements OnInit {
  public structure : Structure[];

  constructor(private structureService : StructureService) { }

    public onAddStructure (addForm: NgForm): void {
    this.structureService.addStructure(addForm.value).subscribe(
      (response : Structure) =>{
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
