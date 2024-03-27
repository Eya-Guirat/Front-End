import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './employee-components/dashboard/dashboard.component';
import { EmployeeGuard } from 'src/app/auth/guards/employee-guard/employee.guard';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent, canActivate: [EmployeeGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
