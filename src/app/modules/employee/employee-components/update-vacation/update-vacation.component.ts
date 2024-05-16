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
          // Format the date to 'YYYY-MM-DDTHH:mm' in local timezone
          let dateString = sd.toISOString().substring(0, 16);
          vacation.sd = dateString;
        }

        if (vacation.ed) {
          let ed = new Date(vacation.ed);
          // Format the date to 'YYYY-MM-DDTHH:mm' in local timezone
          let dateString = ed.toISOString().substring(0, 16);
          vacation.ed = dateString;
        }

        this.validateFrom.patchValue(vacation);
        console.log(res);
      })
    }






    updateVacation() {
      let vacation = this.validateFrom.value;

      // Handle the start date
      let sdParts = vacation.sd.split(/[-T:]/);
      let sdDate = new Date(Date.UTC(sdParts[0], sdParts[1] - 1, sdParts[2], sdParts[3], sdParts[4]));
      vacation.sd = sdDate.toISOString();

      // Handle the end date
      let edParts = vacation.ed.split(/[-T:]/);
      let edDate = new Date(Date.UTC(edParts[0], edParts[1] - 1, edParts[2], edParts[3], edParts[4]));
      vacation.ed = edDate.toISOString();

      console.log(vacation);

      this.service.updateVacation(this.vacationId, vacation).subscribe((res) => {
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
