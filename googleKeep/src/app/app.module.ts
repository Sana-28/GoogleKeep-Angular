import { AppComponent } from './app.component';
import { AppRoutingModule }from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],

  providers: [HttpService,
                LoginService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
