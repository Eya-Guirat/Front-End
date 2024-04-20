import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { PostEmployeeComponent } from './admin-components/post-employee/post-employee.component';
import { AdminGuard } from 'src/app/auth/guards/admin-guard/admin.guard';
import { AllEmployeesComponent } from './admin-components/all-employees/all-employees.component';
import { UpdateEmployeeComponent } from './admin-components/update-employee/update-employee.component';
import { AllVacationsComponent } from './admin-components/all-vacations/all-vacations.component';


const routes: Routes = [
  { path: "dashboard", component: DashboardComponent, canActivate: [AdminGuard] },
  { path: "add_employee", component: PostEmployeeComponent, canActivate: [AdminGuard]},
  { path: "all_employees", component: AllEmployeesComponent, canActivate: [AdminGuard]},
  { path: "add_employee/:employeeId", component: UpdateEmployeeComponent, canActivate: [AdminGuard]},
  { path: "vacations", component: AllVacationsComponent, canActivate: [AdminGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
