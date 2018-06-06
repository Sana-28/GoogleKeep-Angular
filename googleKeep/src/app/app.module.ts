import { AppComponent } from './app.component';
import { AppRoutingModule }from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
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

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
