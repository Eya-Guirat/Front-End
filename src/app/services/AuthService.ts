import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public email: string | undefined;
  public password: string | undefined;
  Login: any;

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string) {
    return this.http.get(environment.hostUrl + '/api/v1/login',
      { headers: { authorization: this.createBasicAuthToken(email, password) } }).pipe(map((res) => {

        this.email = email;
        this.password = password;
        this.registerSuccessfulLogin(email, password);
      }));
  }
  createBasicAuthToken(email: string, password: string) {
    return 'Basic' + window.btoa(email + ":" + password);
  }
  registerSuccessfulLogin(_email: string, _password: string) {
    //save the email to session
  }
}
