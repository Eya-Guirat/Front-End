import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent {

  PROJECT : string[] = [
    "1","2"
    ];


  validateFrom:FormGroup;

  constructor(
    private fb:FormBuilder,
    private snackBar: MatSnackBar
  ){ }

  ngOnInit(): void {
    this.validateFrom = this.fb.group({
      name:['',Validators.required],
      project:['',Validators.required],
      duration:['',Validators.required],
      date:['',Validators.required],
    })
  }
}
