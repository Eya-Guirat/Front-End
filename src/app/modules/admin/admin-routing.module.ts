import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { PostEmployeeComponent } from './admin-components/post-employee/post-employee.component';
import { AdminGuard } from 'src/app/auth/guards/admin-guard/admin.guard';


const routes: Routes = [
  { path: "dashboard", component: DashboardComponent, canActivate: [AdminGuard] },
  { path: "add_employee", component: PostEmployeeComponent, canActivate: [AdminGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
