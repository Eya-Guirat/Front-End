import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';

const BASIC_URL = ["http://localhost:8080/"];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeById(): Observable<any>{
    return this.http.get<[]>(BASIC_URL +`api/employee/${StorageService.getUserId()}`,
    {
      headers: this.createAuthorizationHeader()
    }
    )
  }

  applyProject(projectDto : any): Observable<any>{
    console.log(this.createAuthorizationHeader());
    projectDto.userId = StorageService.getUserId();
    console.log(projectDto);
    return this.http.post<[]>(BASIC_URL +`api/employee/project`, projectDto,
    {
      headers: this.createAuthorizationHeader()
    }
    )
  }

  getAllProjects(): Observable<any> {
    return this.http.get<[]>(BASIC_URL + "api/employee/projects",
      {
        headers: this.createAuthorizationHeader()
      }
    );
  }

  deleteProject(projectId: any): Observable<any>{
    return this.http.delete<[]>(BASIC_URL + `api/employee/project/${projectId}`,
    {
      headers: this.createAuthorizationHeader()
    }
    )
  }

  getProjectById(projectId: number): Observable<any>{
    return this.http.get<[]>(BASIC_URL +`api/employee/project/${projectId}`,
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
