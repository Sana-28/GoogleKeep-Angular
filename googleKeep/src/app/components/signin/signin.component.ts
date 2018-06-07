import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit {

 model: any={};


 name = new FormControl('', [Validators.required]);
 getErrorMessage1() {
   return this.name.hasError('required') ? 'Username cannot be left blank' :
       this.name.hasError('name') ? 'Not a valid email' :
           '';
 }

 email = new FormControl('', [Validators.required, Validators.email]);
 getErrorMessage2() {
   return this.email.hasError('required') ? 'Email Id cannot be left blank' :
       this.email.hasError('email') ? 'Not a valid email' :
           '';
 }


 password = new FormControl('', [Validators.required]);
 getErrorMessage3() {
   return this.password.hasError('required') ? 'Password cannot be blank' :
       this.password.hasError('password') ? 'Not a valid password' :
           '';
 }

 mobileNumber = new FormControl('', [Validators.required]);
 getErrorMessage4() {
   return this.mobileNumber.hasError('required') ? 'Mobile number cannot be blank' :
       this.mobileNumber.hasError('mobileNumber') ? 'Not a valid Number' :
           '';
 }

  constructor() { }

  ngOnInit() {
  }

}
