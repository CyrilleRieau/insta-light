import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
mail:string;
birthdate:Date;
connected:boolean = false;
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.username, this.password, this.birthdate, this.mail).subscribe(
    logged => this.connected = logged);
  }
  
  logout() {
    this.auth.logout();
    this.connected = false;
  }
}
