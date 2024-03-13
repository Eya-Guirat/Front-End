import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateProjectComponent } from './working_hours/projects/create-project/create-project.component';


const routes: Routes = [
  { path:"login", component: LoginComponent },
  { path:"create_project", component: CreateProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
