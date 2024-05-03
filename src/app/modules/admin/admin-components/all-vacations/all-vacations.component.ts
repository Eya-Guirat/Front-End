import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../admin-service/admin.service';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-all-vacations',
  templateUrl: './all-vacations.component.html',
  styleUrls: ['./all-vacations.component.css']
})
export class AllVacationsComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  vacations: any;

  pageEvent: PageEvent;
  slicedData: any[] = [];

  constructor(private service: AdminService,
    private snackBar: MatSnackBar,
    private router: Router ){ }

    ngOnInit(){
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
      this.service.getAllAppliedVacations().subscribe((res) => {
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

    changeVacationstatus(vacationId: number, status: string) {
     this.service.changeVacationstatus(vacationId, status).subscribe(
        (res) => {
          console.log(res);
          if (res.id != null){
            this.snackBar.open('Vacation approved successfully', 'Close', {duration: 1000});
            this.getAllVacations();
          } else {
            this.snackBar.open("Something went wrong", "Close", {duration: 1000});
          }
        });
    }

}
