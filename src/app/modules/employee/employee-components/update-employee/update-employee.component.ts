import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/modules/admin/admin-service/admin.service';
import { EmployeeService } from '../../employee-service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  GENDER : string[] = [
    "Male","Female"
    ];

  employee: any;

  validateFrom:FormGroup;

  confirmationValidator = (control :FormControl): { [s:string]:boolean} => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateFrom.controls["password"].value) {

    }
    return {};
  }



  constructor(private service: EmployeeService,
     private activatedRoute: ActivatedRoute,
     private  fb:FormBuilder,
     private snackBar: MatSnackBar,
     private router: Router ){ }


     ngOnInit(){
      this.validateFrom = this.fb.group({
        email:['',Validators.required],
        name:['',Validators.required],
        gender:['',Validators.required],
        dob:['',Validators.required],
        password:['',Validators.required],
        checkPassword:['']
      })
      this.getEmployeeById();
    }


    getEmployeeById(){
      this.service.getEmployeeById().subscribe((res) =>{
        const employee = res.employeeDto;
        if (employee.dob) {
          let dob = new Date(employee.dob);
          let year = dob.getFullYear();
          let month = ("0" + (dob.getMonth() + 1)).slice(-2);
          let day = ("0" + dob.getDate()).slice(-2);
          employee.dob = `${year}-${month}-${day}`;
        }
        this.validateFrom.patchValue(employee);
        console.log(res);
      })
    }


    updateEmployee(){
      this.service.updateEmployee(this.validateFrom.value).subscribe(
        (res) => {
          console.log(res);
          if (res.id != null){
            this.snackBar.open('Employee edited successfully', 'Close', {duration: 500});
            this.router.navigateByUrl('employee/profile');
          } else {
            this.snackBar.open("Something went wrong", "Close", {duration: 500});
          }
        }
      )
    }




}
