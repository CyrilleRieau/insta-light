import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { User } from './shared/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser:Observable<User>;
  constructor(private auth:AuthService){};
  title = 'app';
ngOnInit():void{
  //this.auth.user.subscribe(user => this.currentUser = user);
  this.currentUser = this.auth.user;
}
}
