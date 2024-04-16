import { Component } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {


  employees: any;

  constructor(private service: AdminService,
     private snackBar: MatSnackBar ){ }

  ngOnInit(){
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.service.getAllEmployee().subscribe((res) =>{
      console.log(res);
      this.employees = res;
    })
  }

  deleteEmployee(employeeId: number){

    this.service.deleteEmployee(employeeId).subscribe((res) => {
      console.log(res);
      this.getAllEmployee();
      this.snackBar.open("Employee deleted successfully", "close", {duration: 500})
    })
  }

}
