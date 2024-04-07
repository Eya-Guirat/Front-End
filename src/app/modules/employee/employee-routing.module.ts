import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './employee-components/dashboard/dashboard.component';
import { EmployeeGuard } from 'src/app/auth/guards/employee-guard/employee.guard';
import { ApplyProjectComponent } from './employee-components/apply-project/apply-project.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent, canActivate: [EmployeeGuard]},
  { path: "create_project", component: ApplyProjectComponent, canActivate: [EmployeeGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
