import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {
  private urlApi:string = 'http://localhost:3000/user';
  constructor (private http:HttpClient) {}
  
getAllUsers():Observable<User[]> {
  return this.http.get<User[]>(this.urlApi);
};

getUserById(id:number):Observable<User>{
  return this.http.get<User>(this.urlApi+ '/' + id);
}
}
