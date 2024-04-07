import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { DashboardComponent } from './employee-components/dashboard/dashboard.component';
import { ApplyProjectComponent } from './employee-components/apply-project/apply-project.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ApplyProjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
