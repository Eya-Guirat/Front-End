import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {

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
