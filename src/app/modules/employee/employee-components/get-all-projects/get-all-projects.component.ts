import { Component } from '@angular/core';
import { EmployeeService } from '../../employee-service/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-all-projects',
  templateUrl: './get-all-projects.component.html',
  styleUrls: ['./get-all-projects.component.css']
})
export class GetAllProjectsComponent {

  projects: any;

  constructor(private service: EmployeeService,
    private snackBar: MatSnackBar ){ }

    ngOnInit(){
      this.getAllProjects();
    }

    getAllProjects(){
      this.service.getAllProjects().subscribe((res) =>{
        console.log(res);
        this.projects = res;
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
