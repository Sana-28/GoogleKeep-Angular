import { AppComponent } from './app.component';
import { AppRoutingModule }from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { LoginService } from './services/login.service';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { NoteService } from './services/note.service';
import { RouterModule } from '@angular/router';
import { RegisterService } from './services/register.service';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],

  providers: [HttpService,
                LoginService,
                 NoteService,
                    RegisterService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
