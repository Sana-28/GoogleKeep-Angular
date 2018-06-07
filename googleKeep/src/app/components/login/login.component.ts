/**
* @author: SANA SHAIKh
* @since: 6/June/2018
* @description: This is login component contains login method  
*/
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

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

  constructor(private loginServiceObj : LoginService,
                 private router: Router) 
                 { }

  ngOnInit() {
  }

  /**@method:This method is to call login APi */
  login(): void {
    console.log("loginForm", this.model);
    this.loginServiceObj.login(this.model)
                          .subscribe(response =>
      {
     
      if (response.status === 200) {
        console.log("Check header..", response.headers.get("Authorization"));
        alert("Logined Succesfully...");

        //localStorage.setItem=this.userservice.getToken.toString;
        localStorage.setItem('Authorization', response.headers.get("Authorization"));
        
        this.router.navigate(['/home']);
          
        } else if (response.status !== 200) {
        alert("Login Failed..");
      }
    });

}
}
