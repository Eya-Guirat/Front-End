import { Component } from '@angular/core';
import { EmployeeService } from '../../employee-service/employee.service';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  tickets: any;

  events: CalendarEvent[] = [];

  constructor(
    private service: EmployeeService

  ){ }


  ngOnInit(){
    this.getEmployeeById();
    this.getAllTickets();
  }


  getAllTickets(){
    this.service.getAllTickets().subscribe((res) =>{
      console.log(res);
      this.tickets = res;
      this.events = res.map(ticket => {
        let parts = ticket.date.split(/[-T:.]/); // split the date string on hyphens, T, colons, and periods
        let date = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2], parts[3], parts[4]));
        return {
          start: date,
          title: `  ${ticket.projectName} - ${ticket.tname} - ${ticket.duration} Hour(s) - ${ticket.ticketStatus} - ${ticket.description}  `,
        };
      });
    })
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
