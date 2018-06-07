import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';


@Injectable()
export class LoginService {

  constructor(private httpserviceObj: HttpService) { }

  login(model): Observable<any>{
    return this.httpserviceObj.postService('login', model);
  }
}