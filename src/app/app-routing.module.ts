import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './working_hours/projects/create-project/create-project.component';
import { EditProjectComponent } from './working_hours/projects/edit-project/edit-project.component';
import { IndexProjectComponent } from './working_hours/projects/index-project/index-project.component';
import { LoginComponent } from './auth/login/login.component';
import { BoardComponent } from './working_hours/board/board.component';

import { TicketsComponent } from './working_hours/tickets/tickets.component';



const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "create_project", component: CreateProjectComponent },
  { path: "edit_project", component: EditProjectComponent },
  { path: "index_project", component: IndexProjectComponent },
  { path: "board", component: BoardComponent },
  { path: "tickets", component: TicketsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
