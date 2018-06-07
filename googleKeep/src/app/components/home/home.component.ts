import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms'
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";
import { Router, ActivatedRoute, ParamMap,NavigationEnd } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { UserResponse } from '../../model/userresponse';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model       : any={};
  name        : string;
  email       : string;
  user        : UserResponse[];
  searchForm  : FormGroup;
  inputFormControl  : FormControl;

  reminder ='/assets/icons/remind.png';
  crossSvg = '/assets/icons/cross.svg';

  title="Google Keep";

  constructor( private dialog: MatDialog,
                  private activatedroute: ActivatedRoute,
                    private httpServiceObject: HttpService,
                      private router : Router,
                       private noteServiceObj: NoteService,
                        private builder: FormBuilder)
                          { 
                            this.inputFormControl = new FormControl();
                            this.searchForm = this.builder.group({
                            inputFormControl: this.inputFormControl
                            }); 
                        }

  ngOnInit() {

  }

    /**@method: This method is for getting the logged user */
  loggedUser(){
    this.httpServiceObject.getUser('getuser').subscribe(response => {
      this.name = response.name;
      this.email = response.email;
      console.log('User information', this.user);
    });
  }

  /**@method: This method is for logout */
  logout() : void{
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  notify():void{
      alert("No notification");
  };


  viewlist(){
    this.noteServiceObj.changeView();
  }

}
