import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './working_hours/projects/create-project/create-project.component';
import { EditProjectComponent } from './working_hours/projects/edit-project/edit-project.component';
import { IndexProjectComponent } from './working_hours/projects/index-project/index-project.component';
import { LoginComponent } from './auth/login/login.component';

import { CreateTicketComponent } from './working_hours/tickets/create-ticket/create-ticket.component';
import { IndexTicketComponent } from './working_hours/tickets/index-ticket/index-ticket.component';
import { EditTicketComponent } from './working_hours/tickets/edit-ticket/edit-ticket.component';
import { CreateVacationComponent } from './vacation/create-vacation/create-vacation.component';
import { EditVacationComponent } from './vacation/edit-vacation/edit-vacation.component';
import { IndexVacationComponent } from './vacation/index-vacation/index-vacation.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { IndexEmployeeComponent } from './employee/index-employee/index-employee.component';
import { CalendarrComponent } from './calendar/calendarr/calendarr.component';




const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "admin", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule) },
  { path: "employee", loadChildren: () => import("./modules/employee/employee.module").then(m => m.EmployeeModule) },
  { path: "create_project", component: CreateProjectComponent },
  { path: "edit_project", component: EditProjectComponent },
  { path: "index_project", component: IndexProjectComponent },


  { path: "header", component: MainHeaderComponent },

  { path: "create_ticket", component: CreateTicketComponent },
  { path: "create_vacation", component: CreateVacationComponent },
  { path: "edit_vacation", component: EditVacationComponent },
  { path: "index_vacation", component: IndexVacationComponent },


  { path: "edit_ticket", component: EditTicketComponent },
  { path: "index_ticket", component: IndexTicketComponent },
  { path: "create_employee", component: CreateEmployeeComponent },
  { path: "edit_employee", component: EditEmployeeComponent },
  { path: "index_employee", component: IndexEmployeeComponent },
  { path: "calendarr", component: CalendarrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
