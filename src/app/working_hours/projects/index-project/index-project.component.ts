import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-index-project',
  templateUrl: './index-project.component.html',
  styleUrls: ['./index-project.component.css']
})
export class IndexProjectComponent {

  projects: any;

  constructor(
     private snackBar: MatSnackBar ){ }

  ngOnInit(){

  }

  getAllTicket(){

  }

  deleteTicket(TicketId: number){


      this.snackBar.open("Employee deleted successfully", "close", {duration: 5000})

  }

}
