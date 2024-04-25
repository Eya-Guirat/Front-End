import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from '../../employee-service/employee.service';

@Component({
  selector: 'app-get-all-tickets',
  templateUrl: './get-all-tickets.component.html',
  styleUrls: ['./get-all-tickets.component.css']
})
export class GetAllTicketsComponent {

  tickets: any;

  constructor(private service: EmployeeService,
    private snackBar: MatSnackBar ){ }

    ngOnInit(): void{
      this.getAllTickets();
    }

    getAllTickets(){
      this.service.getAllTickets().subscribe((res) =>{
        console.log(res);
        this.tickets = res;
      })
    }

}
