import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalendarView } from 'angular-calendar';

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
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;


  setView(view: CalendarView) {
    this.view = view;
  }

}
