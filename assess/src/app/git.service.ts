import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor( public _http:HttpClient) { }

 // term:string="";

getRepo(term):Observable<any>{

  console.log("service function")
  return this._http.get("https://api.github.com/search/repositories?q="+term);
}

getDetails(owner: string, repname:string ){


  if(owner != undefined && repname != undefined )
  {
    return this._http.get("https://api.github.com/repos/"+owner+"/"+repname);

  }
}

}
