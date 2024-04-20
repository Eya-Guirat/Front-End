import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from '../../employee-service/employee.service';

@Component({
  selector: 'app-get-all-vacations',
  templateUrl: './get-all-vacations.component.html',
  styleUrls: ['./get-all-vacations.component.css']
})
export class GetAllVacationsComponent {

  vacations: any;

  constructor(private service: EmployeeService,
    private snackBar: MatSnackBar ){ }

    ngOnInit(): void{
      this.getAllVacations();
    }

    getAllVacations(){
      this.service.getAllAppliedVacationsByEmployeeId().subscribe((res) =>{
        console.log(res);
        this.vacations = res;
      })
    }

}
