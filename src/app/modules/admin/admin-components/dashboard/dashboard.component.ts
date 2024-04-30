import { ChangeDetectorRef, Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

import { AdminService } from '../../admin-service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  events: CalendarEvent[] = [];

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    green: {
      primary: '#008000',
      secondary: '#DFF0D8'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };




  listOfEmployees : any = [];

  constructor(private service: AdminService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllVacations();
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.service.getAllEmployee().subscribe((res) =>{
      console.log(res);
      this.listOfEmployees = res;
    })
  }

  getAllVacations(){
    this.service.getAllAppliedVacations().subscribe((res) => {
      console.log(res);
      this.events = res.map(vacation => {
        return {
          title: `${vacation.name} - ${vacation.type}`,
          start: new Date(vacation.sd),
          end: new Date(vacation.ed),
          color: vacation.vacationStatus === 'Approved' ? this.colors.green : vacation.vacationStatus === 'Disapproved' ? this.colors.red : this.colors.yellow,
          meta: {
            submissionDate: new Date(vacation.date)
          }
        };
      });
      this.cdr.detectChanges();
    }, (error) => {
      console.error(error);
    })
  }







  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }






}
