import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-employee',
  templateUrl: './post-employee.component.html',
  styleUrls: ['./post-employee.component.css']
})
export class PostEmployeeComponent {


  GENDER : string[] = [
    "Male","Female"
    ];

  validateFrom:FormGroup;

  confirmationValidator = (control :FormControl): { [s:string]:boolean} => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateFrom.controls["password"].value) {

    }
    return {};
  }

  constructor(
    private service:AdminService,
    private fb:FormBuilder,
    private snackBar: MatSnackBar,
    private router : Router,
  ){ }

  ngOnInit(): void {
    this.validateFrom = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      checkPassword:['',Validators.required, this.confirmationValidator],
      name:['',Validators.required],
      gender:['',Validators.required],
      dob:['',Validators.required],
    })
  }

  postEmployee(){
    console.log(this.validateFrom.value);
    this.service.addEmployee(this.validateFrom.value).subscribe((res) => {
      console.log(res);
      if (res.id != null){
        this.snackBar.open('Employee submitted successfully', 'Close', {duration: 50000});
        this.router.navigateByUrl('admin/all_employees');
      } else {
        this.snackBar.open("Something went wrong", "Close", {duration: 5000});
      }

    }
    )
  }

}
