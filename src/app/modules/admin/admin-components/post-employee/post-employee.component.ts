import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../admin-service/admin.service';

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
    private fb:FormBuilder
  ){ }

  ngOnInit(): void {
    this.validateFrom = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      checkPassword:['',Validators.required],
      name:['',Validators.required],
      gender:['',Validators.required],
      dob:['',Validators.required],
    })
  }

  postEmployee(){
    console.log(this.validateFrom.value);
    this.service.addEmployee(this.validateFrom.value).subscribe((res) => {
      console.log(res);
    }
    )
  }

}
