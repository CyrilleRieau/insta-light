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
  addUser(user:User):Observable<User>{
      return this.http.post<User>(this.urlApi, user);
  }
  removeUser(id:number){
    return this.http.delete<void>(this.urlApi+ '/' + id);
  }
  updateUser(id:number, entity:User):Observable<User>{
    return this.http.patch<User>(this.urlApi+'/'+id, entity);
  }
}
