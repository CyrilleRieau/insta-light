import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  user:BehaviorSubject<User> =new BehaviorSubject(null);
  urlApi:string='http://localhost:3000/user';
token:string;
  constructor(private http:HttpClient) {
    this.init();
   }

  init() {
    this.token=localStorage.getItem('token');
    if(this.token){
    let expiration = parseInt(this.token.split('|')[1]);
    if (expiration < new Date().getTime()){
      this.getByToken(this.token).subscribe((user)=> {
    this.user.next(user);
    });
    }
  }
};

  login(username:string, password:string, birthdate:Date, mail:string):Observable<boolean>{
    return this.http.get<User[]>
    (this.urlApi+'?username='+username+'&password='+password+'&mail='+mail+'&birthdate='+birthdate)
    .map((users)=> {
    if(users.length === 1){
      localStorage.setItem('user', JSON.stringify(users[0].token));
      this.user.next(users[0]);
      return true;
    }
    return false;
    });
  }
  logout():void{
    localStorage.removeItem('user');
    this.user.next(undefined);
  }
  signup(user:User):Observable<User> {
    return this.http.post<User>(this.urlApi, user);
  }
  getByUsername(username:string):Observable<User[]> {
    return this.http.get<User[]>(this.urlApi+'?username='+username);
  }
  getByToken(token:string):Observable<User> {
    return this.http.get<User[]>(this.urlApi+'?token='+token)
    .map((users)=> {
      if(users.length === 1) {
        return users[0];
      }
      return null;
    })
  }
}
