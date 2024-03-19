import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './working_hours/projects/create-project/create-project.component';
import { EditProjectComponent } from './working_hours/projects/edit-project/edit-project.component';
import { IndexProjectComponent } from './working_hours/projects/index-project/index-project.component';
import { LoginComponent } from './auth/login/login.component';

import { CreateTicketComponent } from './working_hours/tickets/create-ticket/create-ticket.component';
import { IndexTicketComponent } from './working_hours/tickets/index-ticket/index-ticket.component';
import { EditTicketComponent } from './working_hours/tickets/edit-ticket/edit-ticket.component';




const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "admin", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule) },
  { path: "employee", loadChildren: () => import("./modules/employee/employee.module").then(m => m.EmployeeModule) },
  { path: "create_project", component: CreateProjectComponent },
  { path: "edit_project", component: EditProjectComponent },
  { path: "index_project", component: IndexProjectComponent },
<<<<<<< Updated upstream
  { path: "create_ticket", component: CreateTicketComponent},


=======
  { path: "create_ticket", component: CreateTicketComponent },
  { path: "edit_ticket", component: EditTicketComponent },
  { path: "index_ticket", component: IndexTicketComponent },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
