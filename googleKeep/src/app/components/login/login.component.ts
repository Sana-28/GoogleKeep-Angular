import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  model: any = {};
 
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'Email ID/Username cannot be left blank' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  password = new FormControl('', [Validators.required]);
  getErrorMessage1() {
    return this.password.hasError('required') ? 'Password cannot be blank' :
        this.password.hasError('password') ? 'Not a valid password' :
            '';
  }

  constructor() { }

  ngOnInit() {
  }

}
