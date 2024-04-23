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
    "To Do","Doing","Done"
    ];

    listOfProjects : any = [];

    validateFrom:FormGroup;

    constructor(
      private service:EmployeeService,
      private fb:FormBuilder,
      private snackBar: MatSnackBar,
      private router : Router,
    ){ }

    ngOnInit(): void {
      this.validateFrom = this.fb.group({
        projectId:['',Validators.required],
        tname:['',Validators.required],
        duration:['',Validators.required],
        date:['',Validators.required],
        ticketStatus:['',Validators.required],
        description:['',Validators.required],
      });

      this.getAllProjects();
    }

    getAllProjects() {
      this.service.getAllProjects().subscribe(res=>{
        console.log('Response from API:', res);
        this.listOfProjects = res;
      },
      error => {
        console.log('Error:', error);  // Add this line
      }
      );
    }

    applyTicket() {
      console.log(this.validateFrom.value);
      this.service.applyTicket(this.validateFrom.value).subscribe(
        (res) => {
          console.log(res);
          if(res.id != null) {
            this.snackBar.open('Vacation submitted successfully', 'Close', {duration: 500});
          } else {
            this.snackBar.open('Something went wrong', 'Close', {duration: 500});
          }
        }
      )
    }

}
