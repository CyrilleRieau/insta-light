import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../shared/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
listeUser:User[]=[];
aModifier:User;

  constructor(private userServ:UserService) { }

  ngOnInit() {
    this.userServ.getAllUsers().subscribe((users) => this.listeUser = users);    
  }
 
  addUser(user:User){
    this.userServ.addUser(user).subscribe((user)=>this.listeUser.push(user));
  };
  
  removeUser(id:number){
     this.userServ.removeUser(id).subscribe(() => this.ngOnInit())
  };

  modifyUser(user:User){
    this.userServ.updateUser(user.id, user).subscribe();
  }
    
}