import { Component } from '@angular/core';
import { EmployeeService } from '../../employee-service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private service: EmployeeService

  ){ }


  ngOnInit(){
    this.getEmployeeById();
  }


  getEmployeeById(){
    this.service.getEmployeeById().subscribe(
      (res) => {
        console.log(res);
      }
    )

  }


}
