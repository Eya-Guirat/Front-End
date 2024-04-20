import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../admin-service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-vacations',
  templateUrl: './all-vacations.component.html',
  styleUrls: ['./all-vacations.component.css']
})
export class AllVacationsComponent {

  vacations: any;

  constructor(private service: AdminService,
    private snackBar: MatSnackBar,
    private router: Router ){ }

    ngOnInit(){
      this.getAllVacations();
    }

    getAllVacations(){
      this.service.getAllAppliedVacations().subscribe((res) => {
        console.log(res);
        this.vacations = res;
      })
    }

  //  changeVacationStatus(vacationId: number, status: String) {
    //  this.service.changeVacationStatus(vacationId, status).subscribe(
      //  (res) => {
         // console.log(res);
         // if (res.id != null){
           // this.snackBar.open('Vacation approved successfully', 'Close', {duration: 1000});
         // } else {
           // this.snackBar.open("Something went wrong", "Close", {duration: 1000});
          //}
        //}
      //)
    //}

}
