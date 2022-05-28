import { FormGrpComponent } from './../../form-grp/form-grp.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { TableEmpComponent } from'../../tableEmp/tableEmp.component';
import { TablesComponent } from '../../tables/tables.component';
import { TableGroupComponent  } from '../../tableGroup/tableGroup.component';
import { IconsComponent } from '../../icons/icons.component';
import {MatIconModule} from '@angular/material/icon';
import { FormEmpComponent } from 'app/form-emp/form-emp.component';
import { FormSrctComponent } from 'app/form-srct/form-srct.component';
import { CompteComponent } from '../../compte/compte.component';
import { UpdateEmployeeComponentComponent } from 'app/update-employee-component/update-employee-component.component';






@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    MatIconModule
  ],
  declarations: [
    HomeComponent,
    TablesComponent,
    TableEmpComponent,
    TableGroupComponent,
    IconsComponent,
    FormEmpComponent,
    FormGrpComponent,
    FormSrctComponent,
    CompteComponent,
    UpdateEmployeeComponentComponent
    

  ]
})

export class AdminLayoutModule {}
