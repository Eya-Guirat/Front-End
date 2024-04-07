import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent  {

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
