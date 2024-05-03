import { Component, ViewChild } from '@angular/core';
import { EmployeeService } from '../../employee-service/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-get-all-projects',
  templateUrl: './get-all-projects.component.html',
  styleUrls: ['./get-all-projects.component.css']
})
export class GetAllProjectsComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  projects: any;

  pageEvent: PageEvent;
  slicedData: any[] = [];

  constructor(private service: EmployeeService,
    private snackBar: MatSnackBar ){ }

    ngOnInit(){
      this.getAllProjects();
      this.pageEvent = new PageEvent();
      this.pageEvent.pageIndex = 0;
      this.pageEvent.pageSize = 10;
      this.pageEvent.length = this.projects.length;
      this.slicedData = this.projects.slice(0, 10);
    }

    onPaginateChange(event: PageEvent) {
      this.pageEvent = event;
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;

      if(endIndex > this.projects.length){
        endIndex = this.projects.length;
      }

      this.slicedData = this.projects.slice(startIndex, endIndex);
    }

    getAllProjects(){
      this.service.getAllProjects().subscribe((res) =>{
        console.log(res);
        this.projects = res.sort((a, b) => b.id - a.id);
        this.pageEvent = {
          pageIndex: 0,
          pageSize: 5,
          length: this.projects.length
        };
        this.slicedData = this.projects.slice(0, this.pageEvent.pageSize);
      })
    }

    deleteProject(projectId:number){
      console.log(projectId);
      this.service.deleteProject(projectId).subscribe((res) => {
        console.log(res);
        this.getAllProjects();
        this.snackBar.open("Project deleted successfully", "Close", { duration: 500 });
      })
    }


}
