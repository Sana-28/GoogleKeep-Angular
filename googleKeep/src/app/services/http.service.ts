
/**
* @author: SANA SHAIKh
* @since: 6/06/2018
* @description: This is User service i.e. common Http services contains methods to get,put,post,delete requests 
*/
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpService {

 private URL= environment.base_url;

  constructor(private http: HttpClient) { }

  postService(url, model):Observable<any>{
     
    console.log(url, model);
    var urlpath = this.URL.concat(url);
    console.log(urlpath);
    return this.http.post<any>(urlpath, model, { observe: 'response'});
  }
}