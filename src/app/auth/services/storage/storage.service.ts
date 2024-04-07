import { Injectable } from '@angular/core';

const USER = "User";
const TOKEN = "Token";
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveUser(user:any){
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user))
  }

  public saveToken(token: string){
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static getToken():string{
    return window.localStorage.getItem(TOKEN);
  }

  static getUser():any{
    return JSON.parse(localStorage.getItem(USER))
  }

  static hasToken(): boolean {
    if(this.getToken() === null){
      return false;
    }
    return true;
  }

  static getUserRole():string{
    const user = this.getUser();
    if (user == null) {
      return '';
    }
    return user.role;
  }

  static getUserId(){
    const user = this.getUser();
    if (user == null) return '';
    return user.userId;
  }


  public saveEmployeeName(name: string) {
    window.localStorage.setItem('employeeName', name);
    console.log('Stored employee name:', name);
  }

  static getEmployeeName(): string {
    return window.localStorage.getItem('employeeName');
  }


  static isAdminLoggedIn(): boolean {
    if (this.getToken() == null){
      return false;
    }
    const role: string = this.getUserRole();
    return role == "ADMIN";
  }

  static isEmployeeLoggedIn(): boolean{
    if (this.getToken() == null){
      return false;
    }
    const role: string = this.getUserRole();
    return role == "EMPLOYEE";
  }

  static logout(){
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }


}
