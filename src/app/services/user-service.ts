import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:1000/api/demo1000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    //return this.http.get<any>(`${this.baseURL}` + `users`);
    return this.http.get<any>(`${this.baseURL}/users`);
  }
  getUser(id: number): Observable<any>{

    return this.http.get<any>(`${this.baseURL}/user/${id}`)
  }

  saveUser(user:User) :Observable<any>{

    return this.http.post(`${this.baseURL}/save`, user);
  }
  deleteUser( id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/delete/${id}`)
  }
}
