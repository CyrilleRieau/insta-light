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
user:User;
  constructor() { }

  ngOnInit() {
  }

}
