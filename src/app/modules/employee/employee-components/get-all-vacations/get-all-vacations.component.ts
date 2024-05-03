import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from '../../employee-service/employee.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-get-all-vacations',
  templateUrl: './get-all-vacations.component.html',
  styleUrls: ['./get-all-vacations.component.css']
})
export class GetAllVacationsComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  vacations: any;

  pageEvent: PageEvent;
  slicedData: any[] = [];

  constructor(private service: EmployeeService,
    private snackBar: MatSnackBar ){ }

    ngOnInit(): void{
      this.getAllVacations();
      this.pageEvent = new PageEvent();
      this.pageEvent.pageIndex = 0;
      this.pageEvent.pageSize = 10;
      this.pageEvent.length = this.vacations.length;
      this.slicedData = this.vacations.slice(0, 10);
    }


    onPaginateChange(event: PageEvent) {
      this.pageEvent = event;
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;

      if(endIndex > this.vacations.length){
        endIndex = this.vacations.length;
      }

      this.slicedData = this.vacations.slice(startIndex, endIndex);
    }

    getAllVacations(){
      this.service.getAllAppliedVacationsByEmployeeId().subscribe((res) =>{
        console.log(res);
        this.vacations = res.sort((a, b) => b.id - a.id);
        this.pageEvent = {
          pageIndex: 0,
          pageSize: 5,
          length: this.vacations.length
        };
        this.slicedData = this.vacations.slice(0, this.pageEvent.pageSize);
      })
    }

    deleteVacation(vacationId:number){
      console.log(vacationId);
      this.service.deleteVacation(vacationId).subscribe((res) => {
        console.log(res);
        this.getAllVacations();
        this.snackBar.open("Vacation deleted successfully", "Close", { duration: 500 });
      })
    }

}
