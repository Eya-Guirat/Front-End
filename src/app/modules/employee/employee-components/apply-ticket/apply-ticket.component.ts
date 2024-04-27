import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeService } from '../../employee-service/employee.service';

@Component({
  selector: 'app-apply-ticket',
  templateUrl: './apply-ticket.component.html',
  styleUrls: ['./apply-ticket.component.css']
})
export class ApplyTicketComponent {

  STATUS : string[] = [
    "ToDo","Doing","Done"
];

    listOfProjects : any = [];

    validateFrom:FormGroup;
  ticketErrorMessage: any;

    constructor(
      private service:EmployeeService,
      private fb:FormBuilder,
      private snackBar: MatSnackBar,
      private router : Router,
    ){ }

    ngOnInit(): void {
      this.validateFrom = this.fb.group({
        projectId:[null ,[Validators.required]],
        tname:[null ,[Validators.required]],
        duration:[null ,[Validators.required]],
        date:[null ,[Validators.required]],
        ticketStatus:[null ,[Validators.required]],
        description:[null ,[Validators.required]],
      });

      this.getAllProjects();
    }

    getAllProjects() {
      this.service.getAllProjects().subscribe(res=>{
        console.log('Response from API:', res);
        this.listOfProjects = res;
      },
      error => {
        console.log('Error:', error);
          // Add this line
      }
      );
    }

    applyTicket() {
      console.log(this.validateFrom.value);
      this.service.applyTicket(this.validateFrom.value).subscribe(
          (res) => {
              console.log(res);
              if(res.id != null) {
                  this.snackBar.open('Ticket submitted successfully', 'Close', {duration: 500});
                  this.router.navigateByUrl('employee/all_tickets');
              } else {
                  this.snackBar.open('Something went wrong', 'Close', {duration: 500});
              }
          },
          (error) => {
              this.ticketErrorMessage = error.error;
              this.snackBar.open('A ticket with the same name already exists for today.', 'Close', {duration: 2000});
          }
      );
  }

}
