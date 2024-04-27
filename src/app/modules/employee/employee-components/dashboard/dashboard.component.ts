import { Component } from '@angular/core';
import { EmployeeService } from '../../employee-service/employee.service';
import { CalendarView } from 'angular-calendar';

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

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;


  setView(view: CalendarView) {
    this.view = view;
  }



}
