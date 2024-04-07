import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent  {

  validateFrom:FormGroup;

  constructor(
    private fb:FormBuilder,
    private snackBar: MatSnackBar
  ){ }

  ngOnInit(): void {
    this.validateFrom = this.fb.group({
      name:['',Validators.required],
    })
  }

}
