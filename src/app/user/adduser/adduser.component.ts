import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../shared/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
newUser:User;
@Input()
numeroUser:number =0;
@Output("onAdd")
eventAjout:EventEmitter<User> = new EventEmitter();

constructor() { 
  this.newUser = {
    username: '',
    password:'',
    birthdate:'',
    mail:'',
    };
}

  ngOnInit() {
    
  }

  addUser(){
    this.eventAjout.emit(this.newUser);
  }
}
