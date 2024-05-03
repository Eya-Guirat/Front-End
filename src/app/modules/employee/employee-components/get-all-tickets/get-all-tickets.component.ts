import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from '../../employee-service/employee.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-get-all-tickets',
  templateUrl: './get-all-tickets.component.html',
  styleUrls: ['./get-all-tickets.component.css']
})
export class GetAllTicketsComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  tickets: any;

  pageEvent: PageEvent;
  slicedData: any[] = [];

  constructor(private service: EmployeeService,
    private snackBar: MatSnackBar ){ }

    ngOnInit(): void{
      this.getAllTickets();
      this.pageEvent = new PageEvent();
      this.pageEvent.pageIndex = 0;
      this.pageEvent.pageSize = 10;
      this.pageEvent.length = this.tickets.length;
      this.slicedData = this.tickets.slice(0, 10);
    }

    onPaginateChange(event: PageEvent) {
      this.pageEvent = event;
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;

      if(endIndex > this.tickets.length){
        endIndex = this.tickets.length;
      }

      this.slicedData = this.tickets.slice(startIndex, endIndex);
    }

    getAllTickets(){
      this.service.getAllTickets().subscribe((res) =>{
        console.log(res);
        this.tickets = res.sort((a, b) => b.id - a.id);
        this.pageEvent = {
          pageIndex: 0,
          pageSize: 5,
          length: this.tickets.length
        };
        this.slicedData = this.tickets.slice(0, this.pageEvent.pageSize);
      })
    }

    deleteTicket(ticketId:number){
      console.log(ticketId);
      this.service.deleteTicket(ticketId).subscribe((res) => {
        console.log(res);
        this.getAllTickets();
        this.snackBar.open("Ticket deleted successfully", "Close", { duration: 500 });
      })
    }

}
