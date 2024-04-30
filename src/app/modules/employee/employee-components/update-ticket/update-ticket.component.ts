import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../employee-service/employee.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent {

  STATUS : string[] = [
    "ToDo","Doing","Done"
];

listOfProjects : any = [];

  ticketId:number= this.activatedRoute.snapshot.params['ticketId']

  validateFrom: FormGroup;

  constructor(private service: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private  fb:FormBuilder,

    private snackBar: MatSnackBar ){ }

    ngOnInit() {
      this.validateFrom = this.fb.group({
        projectId:[null ,[Validators.required]],
        tname:[null ,[Validators.required]],
        duration:[null ,[Validators.required]],
        date:[null ,[Validators.required]],
        ticketStatus:[null ,[Validators.required]],
        description:[null ,[Validators.required]],
      });
      this.getTicketById();
      this.getAllProjects();
  }

  getTicketById(){
    this.service.getTicketById(this.ticketId).subscribe((res) => {
      const ticket = res.ticketDto;

      let date = new Date(ticket.date);
      // Convert the date to the user's local time
      let localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
      // Format the date to 'YYYY-MM-DDTHH:mm'
      let dateString = localDate.toISOString().substring(0, 16);

      ticket.date = dateString;

      this.validateFrom.patchValue(ticket);
      console.log(res);
    })
  }






  getAllProjects() {
    this.service.getAllProjects().subscribe(res=>{
      console.log('Response from API:', res);
      this.listOfProjects = res;
    },
    error => {
      console.log('Error:', error);

    }
    );
  }

  updateTicket() {
    this.service.updateTicket(this.ticketId, this.validateFrom.value).subscribe((res) => {
      console.log(res);
      if (res.id != null){
        this.snackBar.open('Ticket edited successfully', 'Close', {duration: 500});
        this.router.navigateByUrl('employee/all_tickets');
      } else {
        this.snackBar.open("Something went wrong", "Close", {duration: 500});
      }
    })
  }

}
