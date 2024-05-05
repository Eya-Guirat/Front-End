import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';

const BASIC_URL = ["http://localhost:8080/"];


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addEmployee(employeeDto: any): Observable<any>{
    console.log(this.createAuthorizationHeader());
    return this.http.post<[]>(BASIC_URL + "api/admin/employee", employeeDto,{
      headers: this.createAuthorizationHeader(),
    });
  }

  addAdmin(adminDto: any): Observable<any>{
    console.log(this.createAuthorizationHeader());
    return this.http.post<[]>(BASIC_URL + "api/admin/admin", adminDto,{
      headers: this.createAuthorizationHeader(),
    });
  }

  getAllEmployee(): Observable<any>{
    return this.http.get<[]>(BASIC_URL + "api/admin/employees",
    {
      headers: this.createAuthorizationHeader()
    }
    )
  }

  deleteEmployee(employeeId: any): Observable<any>{
    return this.http.delete<[]>(BASIC_URL + `api/admin/employee/${employeeId}`,
    {
      headers: this.createAuthorizationHeader()
    }
    )
  }

  getEmployeeById(employeeId: number): Observable<any>{
    return this.http.get<[]>(BASIC_URL +`api/admin/employee/${employeeId}`,
    {
      headers: this.createAuthorizationHeader()
    }
    )
  }

  updateEmployee(employeeId: number,employeeDto: any): Observable<any>{
    console.log(this.createAuthorizationHeader());
    return this.http.put<[]>(BASIC_URL + `api/admin/employee/${employeeId}`, employeeDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getAllAppliedVacations(): Observable<any>{
    return this.http.get<[]>(BASIC_URL +`api/admin/vacations`,
    {
      headers: this.createAuthorizationHeader()
    }
    )
  }

  changeVacationstatus(vacationId: number, status : string): Observable<any>{
    return this.http.get<[]>(BASIC_URL +`api/admin/vacations/${vacationId}/${status}`,
    {
      headers: this.createAuthorizationHeader()
    }
    )
  }

  getAllAppliedVacationsByEmployeeId(employeeId: number): Observable<any>{
    return this.http.get<[]>(BASIC_URL +`api/employee/vacation/${employeeId}`,
    {
      headers: this.createAuthorizationHeader()
    }
    )
  }

  getAllTickets(employeeId: number): Observable<any>{
    return this.http.get<[]>(BASIC_URL +`api/employee/ticket/${employeeId}`,
    {
      headers: this.createAuthorizationHeader()
    }
    )
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders : HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization', "Bearer " + StorageService.getToken()
    );
  }

}
