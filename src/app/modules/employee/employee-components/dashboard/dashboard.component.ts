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

  vacations: any;

  ticketEvents: CalendarEvent[] = [];

  vacationEvents: CalendarEvent[] = [];

  events: CalendarEvent[] = [];

  constructor(
    private service: EmployeeService

  ){ }


  ngOnInit(){
    this.getAllVacations();
    this.getEmployeeById();
    this.getAllTickets();
  }


  getAllTickets(){
    this.service.getAllTickets().subscribe((res) =>{
      console.log(res);
      this.tickets = res;
      this.ticketEvents = res.map(ticket => {
        let parts = ticket.date.split(/[-T:.]/); // split the date string on hyphens, T, colons, and periods
        let startDate = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2], parts[3], parts[4]));
        let endDate = new Date(startDate.getTime() + ticket.duration * 60 * 60 * 1000); // add duration hours to start date
        return {
          start: startDate,
          end: endDate, // add this line
          title: `  ${ticket.projectName} - ${ticket.tname} - ${ticket.duration} Hour(s) - ${ticket.ticketStatus} - ${ticket.description}  `,
        };
      });
      this.events = [...this.ticketEvents, ...this.vacationEvents];
    })
  }


  getAllVacations(){
    this.service.getAllAppliedVacationsByEmployeeId().subscribe((res) =>{
      console.log(res);
      this.vacations = res;

      this.vacationEvents = res.map(vacation => {
        let sdParts = vacation.sd.split(/[-T:.]/);
        let sdDate = new Date(sdParts[0], sdParts[1] - 1, sdParts[2], sdParts[3], sdParts[4]);

        let edParts = vacation.ed.split(/[-T:.]/);
        let edDate = new Date(edParts[0], edParts[1] - 1, edParts[2], edParts[3], edParts[4]);

        let color: string;
        switch (vacation.vacationStatus) {
          case 'Pending':
            color = '#e8ffd1';
            break;
          case 'Approved':
            color = '#dff4eb';
            break;
          case 'Disapproved':
            color = '#ffd1e8';
            break;
          default:
            color = 'black';
        }

        return {
          start: sdDate,
          end: edDate, // add this line
          title: ` ${vacation.type} - From ${sdDate.toISOString().split('T')[0]} to ${edDate.toISOString().split('T')[0]} - <span style="color: ${color};"> ${vacation.vacationStatus}</span>`,
          color: {
            primary: color,
            secondary: color
          }
        };
      });
      this.events = [...this.ticketEvents, ...this.vacationEvents];
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
