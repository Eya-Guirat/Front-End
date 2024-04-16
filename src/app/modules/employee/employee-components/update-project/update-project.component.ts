import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../employee-service/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent {

  projectId:number= this.activatedRoute.snapshot.params['projectId']
  validateFrom:FormGroup;

  constructor(private service: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private  fb:FormBuilder,

    private snackBar: MatSnackBar ){ }

    ngOnInit() {
      this.validateFrom = this.fb.group({
        name:['',Validators.required],
      })
      this.getProjectById();
    }

    getProjectById(){
      this.service.getProjectById(this.projectId).subscribe((res) => {
        const project = res.projectDto;
        this.validateFrom.patchValue(project);
        console.log(res);
      })
    }

    updateProject() {
      this.service.updateProject(this.projectId, this.validateFrom.value).subscribe((res) => {
        console.log(res);
        if (res.id != null){
          this.snackBar.open('Project edited successfully', 'Close', {duration: 500});
          this.router.navigateByUrl('employee/all_projects');
        } else {
          this.snackBar.open("Something went wrong", "Close", {duration: 500});
        }
      })
    }

}
