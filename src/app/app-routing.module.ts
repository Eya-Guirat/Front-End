import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './working_hours/projects/create-project/create-project.component';
import { EditProjectComponent } from './working_hours/projects/edit-project/edit-project.component';
import { IndexProjectComponent } from './working_hours/projects/index-project/index-project.component';
import { LoginComponent } from './auth/login/login.component';
<<<<<<< Updated upstream
import { CreateTicketComponent } from './working_hours/tickets/create-ticket/create-ticket.component';




=======


import { EditTicketComponent } from './working_hours/tickets/edit-ticket/edit-ticket.component';
import { IndexTicketComponent } from './working_hours/tickets/index-ticket/index-ticket.component';
import { CreateTicketComponent } from './working_hours/tickets/create-ticket/create-ticket.component';
import { CreateBoardComponent } from './working_hours/board/create-board/create-board.component';
import { EditBoardComponent } from './working_hours/board/edit-board/edit-board.component';
import { IndexBoardComponent } from './working_hours/board/index-board/index-board.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
>>>>>>> Stashed changes


const routes: Routes = [
  { path: "login", component: LoginComponent },
<<<<<<< Updated upstream
  { path: "create_project", component: CreateProjectComponent },
  { path: "edit_project", component: EditProjectComponent },
  { path: "index_project", component: IndexProjectComponent },
  { path: "create_ticket", component: CreateTicketComponent},
=======
  { path: "create-project", component: CreateProjectComponent },
  { path: "edit-project", component: EditProjectComponent },
  { path: "index-project", component: IndexProjectComponent },
  { path: "create-ticket", component: CreateTicketComponent },
  { path: "edit-ticket", component: EditTicketComponent },
  { path: "index-ticket", component: IndexTicketComponent },
  { path: "create-board", component: CreateBoardComponent },
  { path: "edit-board", component: EditBoardComponent },
  { path: "index-board", component: IndexBoardComponent },
  { path: "MainHeaderComponent", component: MainHeaderComponent },
  { path: "MainSidebarComponent", component: MainSidebarComponent },
  { path: "MainFooterComponent", component: MainFooterComponent },
  { path: "ControlSidebarComponent", component: ControlSidebarComponent },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
