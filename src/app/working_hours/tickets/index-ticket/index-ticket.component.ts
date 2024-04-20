import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-index-ticket',
  templateUrl: './index-ticket.component.html',
  styleUrls: ['./index-ticket.component.css']
})
export class IndexTicketComponent {

  tickets: any;

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
