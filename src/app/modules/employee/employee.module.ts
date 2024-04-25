import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { DashboardComponent } from './employee-components/dashboard/dashboard.component';
import { ApplyProjectComponent } from './employee-components/apply-project/apply-project.component';
import { GetAllProjectsComponent } from './employee-components/get-all-projects/get-all-projects.component';
import { UpdateProjectComponent } from './employee-components/update-project/update-project.component';
import { ApplyVacationComponent } from './employee-components/apply-vacation/apply-vacation.component';
import { GetAllVacationsComponent } from './employee-components/get-all-vacations/get-all-vacations.component';
import { ApplyTicketComponent } from './employee-components/apply-ticket/apply-ticket.component';
import { GetAllTicketsComponent } from './employee-components/get-all-tickets/get-all-tickets.component';
import { UpdateTicketComponent } from './employee-components/update-ticket/update-ticket.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ApplyProjectComponent,
    GetAllProjectsComponent,
    UpdateProjectComponent,
    ApplyVacationComponent,
    GetAllVacationsComponent,
    ApplyTicketComponent,
    GetAllTicketsComponent,
    UpdateTicketComponent
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
