import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../../admin-service/admin.service';

@Component({
  selector: 'app-post-hr',
  templateUrl: './post-hr.component.html',
  styleUrls: ['./post-hr.component.css']
})
export class PostHrComponent {


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

  postAdmin(){
    console.log(this.validateFrom.value);
    this.service.addAdmin(this.validateFrom.value).subscribe((res) => {
      console.log(res);
      if (res.id != null){
        this.snackBar.open('HR submitted successfully', 'Close', {duration: 500});
        //this.router.navigateByUrl('admin/all_employees');
      } else {
        this.snackBar.open("Something went wrong", "Close", {duration: 500});
      }

    }
    )
  }

}
