import { Component } from '@angular/core';
import { EmployeeService } from '../../employee-service/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  employee: any;

constructor(
  private service: EmployeeService
  ) { }

  ngOnInit() {
    this.getEmployeeById();
  }

  getEmployeeById(){
    this.service.getEmployeeById().subscribe(
      (res) => {
        console.log(res);
        this.employee = res.employeeDto;
      }
    )
  }

}
