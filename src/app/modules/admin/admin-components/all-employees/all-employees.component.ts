import { Component, ViewChild } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  employees: any;

  pageEvent: PageEvent;
  slicedData: any[] = [];

  constructor(private service: AdminService,
     private snackBar: MatSnackBar ){ }

  ngOnInit(){
    this.getAllEmployee();
    this.pageEvent = new PageEvent();
      this.pageEvent.pageIndex = 0;
      this.pageEvent.pageSize = 10;
      this.pageEvent.length = this.employees.length;
      this.slicedData = this.employees.slice(0, 10);
  }

  onPaginateChange(event: PageEvent) {
    this.pageEvent = event;
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if(endIndex > this.employees.length){
      endIndex = this.employees.length;
    }

    this.slicedData = this.employees.slice(startIndex, endIndex);
  }

  getAllEmployee(){
    this.service.getAllEmployee().subscribe((res) =>{
      console.log(res);
      this.employees = res.sort((a, b) => b.id - a.id);
        this.pageEvent = {
          pageIndex: 0,
          pageSize: 5,
          length: this.employees.length
        };
        this.slicedData = this.employees.slice(0, this.pageEvent.pageSize);
      })
  }

  deleteEmployee(employeeId: number){

    this.service.deleteEmployee(employeeId).subscribe((res) => {
      console.log(res);
      this.getAllEmployee();
      this.snackBar.open("Employee deleted successfully", "close", {duration: 3000})
    })
  }

}
