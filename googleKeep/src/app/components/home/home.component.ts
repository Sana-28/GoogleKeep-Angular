import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms'
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";
import { Router, ActivatedRoute, ParamMap,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reminder='/assets/icons/remind.png';
  crossSvg  = '/assets/icons/cross.svg';
  searchForm: FormGroup;
  inputFormControl: FormControl;

  title="Google Keep";

  constructor( private dialog: MatDialog,
                  private activatedroute: ActivatedRoute,
                    private router : Router,
                       private builder: FormBuilder)
                        { 
                          this.inputFormControl = new FormControl();
                          this.searchForm = this.builder.group({
                           inputFormControl: this.inputFormControl
                          }); 
                        }

  ngOnInit() {

  }



  loggedUser(){

  }

  /**@method: This method is for logout */
  logout() : void{
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  notify():void{
      alert("No notification");
  };

}
