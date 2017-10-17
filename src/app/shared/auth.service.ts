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

  constructor(private http:HttpClient) {
    this.user.next(JSON.parse(localStorage.getItem('user')));
   }

  login(username:string, password:string):Observable<boolean>{
    return this.http.get<User[]>
    (this.urlApi+'?username='+username+'&password='+password)
    .map((users)=> {
    if(users.length === 1){
      localStorage.setItem('user', JSON.stringify(users[0]));
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
}
