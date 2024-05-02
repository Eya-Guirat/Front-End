import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './employee-components/dashboard/dashboard.component';
import { EmployeeGuard } from 'src/app/auth/guards/employee-guard/employee.guard';
import { ApplyProjectComponent } from './employee-components/apply-project/apply-project.component';
import { GetAllProjectsComponent } from './employee-components/get-all-projects/get-all-projects.component';
import { UpdateProjectComponent } from './employee-components/update-project/update-project.component';
import { ApplyVacationComponent } from './employee-components/apply-vacation/apply-vacation.component';
import { GetAllVacationsComponent } from './employee-components/get-all-vacations/get-all-vacations.component';
import { ApplyTicketComponent } from './employee-components/apply-ticket/apply-ticket.component';
import { GetAllTicketsComponent } from './employee-components/get-all-tickets/get-all-tickets.component';
import { UpdateTicketComponent } from './employee-components/update-ticket/update-ticket.component';
import { UpdateVacationComponent } from './employee-components/update-vacation/update-vacation.component';
import { ProfileComponent } from './employee-components/profile/profile.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent, canActivate: [EmployeeGuard]},
  { path: "create_project", component: ApplyProjectComponent, canActivate: [EmployeeGuard]},
  { path: "all_projects", component: GetAllProjectsComponent, canActivate: [EmployeeGuard]},
  { path: "create_project/:projectId", component: UpdateProjectComponent, canActivate: [EmployeeGuard]},
  { path: "vacation", component: ApplyVacationComponent, canActivate: [EmployeeGuard]},
  { path: "all_vacations", component: GetAllVacationsComponent, canActivate: [EmployeeGuard]},
  { path: "vacation/:vacationId", component: UpdateVacationComponent, canActivate: [EmployeeGuard]},
  { path: "create_ticket", component: ApplyTicketComponent, canActivate: [EmployeeGuard]},
  { path: "all_tickets", component: GetAllTicketsComponent, canActivate: [EmployeeGuard]},
  { path: "create_ticket/:ticketId", component: UpdateTicketComponent, canActivate: [EmployeeGuard]},
  { path: "profile", component: ProfileComponent, canActivate: [EmployeeGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
