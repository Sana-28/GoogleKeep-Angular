import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResetpasswordComponent implements OnInit {

  model : any= {};

  password = new FormControl('', [Validators.required]);
  getErrorMessage1() {
    return this.password.hasError('required') ? 'Password cannot be blank' :
        this.password.hasError('password') ? 'Not a valid password' :
            '';
  }

  constructor(private resetSerObject: HttpService) { }

  ngOnInit() {
    console.log(window.location.search);
  }

  /**@method: This method is set new password */
  reset(){
    
    console.log(this.model);
    var urlPath = 'resetnewpassword'+window.location.search;
    this.resetSerObject.postService(urlPath,this.model)
                        .subscribe(data=>{
                          console.log(data)});
  }

}
