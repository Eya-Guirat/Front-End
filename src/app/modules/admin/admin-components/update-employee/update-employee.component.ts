import { Component } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  GENDER : string[] = [
    "Male","Female"
    ];

  employeeId:number=this.activatedRoute.snapshot.params['employeeId']
  validateFrom:FormGroup;



  constructor(private service:AdminService,
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
        password:[''],
        checkPassword:[''],
      })
      this.getEmployeeById();
    }


    getEmployeeById(){
      this.service.getEmployeeById(this.employeeId).subscribe((res) =>{
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
      this.service.updateEmployee(this.employeeId,this.validateFrom.value).subscribe(
        (res) => {
          console.log(res);
          if (res.id != null){
            this.snackBar.open('Employee edited successfully', 'Close', {duration: 500});
            this.router.navigateByUrl('admin/all_employees');
          } else {
            this.snackBar.open("Something went wrong", "Close", {duration: 500});
          }
        }
      )
    }

}
