import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../employee-service/employee.service';

@Component({
  selector: 'app-update-vacation',
  templateUrl: './update-vacation.component.html',
  styleUrls: ['./update-vacation.component.css']
})
export class UpdateVacationComponent {


  vacationId:number= this.activatedRoute.snapshot.params['vacationId']

  TYPE : string[] = [
    "Sick Leave","Child's Birth","Wedding","Work From Home","Maternity"
    ];

    validateFrom:FormGroup;

    constructor(
      private service:EmployeeService,
      private activatedRoute: ActivatedRoute,
      private fb:FormBuilder,
      private snackBar: MatSnackBar,
      private router : Router,
    ){ }

    ngOnInit(): void {
      this.validateFrom = this.fb.group({
        type:['',Validators.required],
        sd:['',Validators.required],
        ed:['',Validators.required],
      });
      this.getVacationById();
    }

    getVacationById(){
      this.service.getVacationById(this.vacationId).subscribe((res) => {
        const vacation = res.vacationDto;

        if (vacation.sd) {
          let sd = new Date(vacation.sd);
          let year = sd.getFullYear();
          let month = ("0" + (sd.getMonth() + 1)).slice(-2);
          let day = ("0" + sd.getDate()).slice(-2);
          vacation.sd = `${year}-${month}-${day}`;
        }

        if (vacation.ed) {
          let ed = new Date(vacation.ed);
          let year = ed.getFullYear();
          let month = ("0" + (ed.getMonth() + 1)).slice(-2);
          let day = ("0" + ed.getDate()).slice(-2);
          vacation.ed = `${year}-${month}-${day}`;
        }

        this.validateFrom.patchValue(vacation);
          console.log(res);
      })
  }

  updateVacation() {
    this.service.updateVacation(this.vacationId, this.validateFrom.value).subscribe((res) => {
      console.log(res);
      if (res.id != null){
        this.snackBar.open('Vacation edited successfully', 'Close', {duration: 500});
        this.router.navigateByUrl('employee/all_vacations');
      } else {
        this.snackBar.open("Something went wrong", "Close", {duration: 500});
      }
    })
  }






}
