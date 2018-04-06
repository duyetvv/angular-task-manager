import { Component, OnInit } from '@angular/core';
import User from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  }
}
