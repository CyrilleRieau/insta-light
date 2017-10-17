import { Component, OnInit,Input, EventEmitter, Output  } from '@angular/core';
import { User } from '../../shared/user';

@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.css']
})
export class ModifyuserComponent implements OnInit {
@Input()
  user:User;
@Output()
  onSave:EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  saveUser(){
    this.onSave.emit(this.user);
  }
}
