import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Structure } from 'app/models/structure';
import { StructureService } from 'app/services/structure.service';



@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public structure : Structure[];
    public updateStructure: Structure;

  constructor(private structureService : StructureService) { }

    public getStructures() : void {
    this.structureService.getStructures().subscribe(
     ( response: Structure[] )=>{
      this.structure = response;
      },
      (error: HttpErrorResponse) => {
        alert (error.message);
      }

    );
    }

     public onDeleteStructure (ou: string ) :void {
      this.structureService.deleteStructure(ou).subscribe(
          (response :void ) =>{
          console.log(response);
          this.getStructures();
         },
        (error : HttpErrorResponse) => {
         alert (error.message);
        },
      );
     }
     
     public onUpdateStructure (structure : Structure ): void {
       console.log(structure)
      this.structureService.updateStructure(structure).subscribe(
      (response: Structure []) => {
        console.log(response);
        this.getStructures();
      },
      (error : HttpErrorResponse) =>{
        alert (error.message);
      }
    );
     }

  ngOnInit() {
    this.getStructures();  
  }

}
