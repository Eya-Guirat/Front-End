import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { PostEmployeeComponent } from './admin-components/post-employee/post-employee.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AllEmployeesComponent } from './admin-components/all-employees/all-employees.component';
import { UpdateEmployeeComponent } from './admin-components/update-employee/update-employee.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    DashboardComponent,
    PostEmployeeComponent,
    UpdateEmployeeComponent,
    AllEmployeesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
