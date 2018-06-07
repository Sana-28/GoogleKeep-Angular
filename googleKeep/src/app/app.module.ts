import { AppComponent } from './app.component';
import { AppRoutingModule }from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { LoginService } from './services/login.service';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { RegisterService } from './services/register.service';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent
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
                  RegisterService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
