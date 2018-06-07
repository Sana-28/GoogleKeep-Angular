
/**
* @author: SANA SHAIKh
* @since: 6/06/2018
* @description: This is User service i.e. common Http services contains methods to get,put,post,delete requests 
*/
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserResponse } from '../model/userresponse';


@Injectable()
export class HttpService {

 private URL= environment.base_url;

 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  postService(url, model):Observable<any>{
     
    console.log(url, model);
    var urlpath = this.URL.concat(url);
    console.log(urlpath);
    return this.http.post<any>(urlpath, model, { observe: 'response'});
  }

  putService(url, model){
    console.log('testinggg',url,model);
    var urlpath = this.URL.concat(url);
    console.log(urlpath);
    return this.http.put(urlpath, model, this.httpOptions);
  }

  getService(url : string ,model? : any):Observable<any>{
    
    let urlpath=this.URL.concat(url);
    return this.http.get<any>(urlpath,this.httpOptions);
  }
  
  getUser(url):Observable<UserResponse>{
    
    let urlpath=this.URL.concat(url);
    return this.http.get<UserResponse>(urlpath,this.httpOptions);
  }

  deleteNoteService(url){
    var urlpath=this.URL.concat(url);
    return this.http.delete(urlpath,this.httpOptions);
  }

}