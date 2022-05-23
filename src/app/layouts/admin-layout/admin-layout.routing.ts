import { FormSrctComponent } from './../../form-srct/form-srct.component';
import { FormGrpComponent } from './../../form-grp/form-grp.component';
import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { TableEmpComponent} from '../../tableEmp/tableEmp.component';
import { TablesComponent } from '../../tables/tables.component'
import { TableGroupComponent } from '../../tableGroup/tableGroup.component';
import { IconsComponent } from '../../icons/icons.component';
import { FormEmpComponent } from '../../form-emp/form-emp.component';
import { CompteComponent } from '../../compte/compte.component';




export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: TableEmpComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TableGroupComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'formemp',        component: FormEmpComponent },
    { path:'formgrp',         component: FormGrpComponent},
    { path:'formsrct',        component: FormSrctComponent},
    { path :'compte',         component:CompteComponent}
]
