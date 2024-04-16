import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from '../../employee-service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-project',
  templateUrl: './apply-project.component.html',
  styleUrls: ['./apply-project.component.css']
})
export class ApplyProjectComponent {

  validateFrom:FormGroup;

  constructor(
    private fb:FormBuilder,
    private snackBar: MatSnackBar,
    private employeeService : EmployeeService,
    private router : Router,
  ){ }

  ngOnInit(): void {
    this.validateFrom = this.fb.group({
      name:[null ,[Validators.required]],
    });
  }

  applyProject(){
    console.log(this.validateFrom.value);
    this.employeeService.applyProject(this.validateFrom.value).subscribe(

      (res) => {
        console.log(res);
        if (res.id != null){
          this.snackBar.open('Project submitted successfully', 'SUCCESS', {duration: 50000});
          this.router.navigateByUrl('employee/all_projects');
        } else {
          this.snackBar.open("Something went wrong", "ERROR", {duration: 5000});
        }
      },
    );
  }

}
