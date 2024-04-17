import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee-service/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-vacation',
  templateUrl: './apply-vacation.component.html',
  styleUrls: ['./apply-vacation.component.css']
})
export class ApplyVacationComponent {

  TYPE : string[] = [
    "Sick Leave","Child's Birth","Wedding","Work From Home","Maternity"
    ];

    validateFrom:FormGroup;

    constructor(
      private service:EmployeeService,
      private fb:FormBuilder,
      private snackBar: MatSnackBar,
      private router : Router,
    ){ }

    ngOnInit(): void {
      this.validateFrom = this.fb.group({
        type:['',Validators.required],
        sd:['',Validators.required],
        ed:['',Validators.required],
      })
    }

    applyVacation() {
      console.log(this.validateFrom.value);
      this.service.applyVacation(this.validateFrom.value).subscribe(
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
