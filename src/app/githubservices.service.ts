import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//88d07c32eadfe766d98a37b4eeed7486e2e31fe6 
@Injectable({
  providedIn: 'root'
})
export class GithubservicesService {

  private _createUrl: string = 'https://api.github.com/user/repos?access_token=88d07c32eadfe766d98a37b4eeed7486e2e31fe6';
  private _delUrl:string = 'https://api.github.com/repos/dileepkm666/';
  private _token:string = '?access_token=88d07c32eadfe766d98a37b4eeed7486e2e31fe6';

  constructor(private _http:HttpClient) { }
  public getAllRepo()
  {
    return this._http.get("https://api.github.com/user/repos?access_token=88d07c32eadfe766d98a37b4eeed7486e2e31fe6");
  }
  public createRepo(repoName:string,description:string)
  {
      return this._http.post(this._createUrl,
        {
          "name": repoName,
          "description": description  ,
          "homepage": "https://github.com",
          "private": false,
          "has_issues": true,
          "has_projects": true,
          "has_wiki": true
        });
      console.log("created method");
  }

  deleteRepo(repoName:any)
  {
     return this._http.delete(this._delUrl+repoName+this._token);
  }
  pullRepo(repoName:any)
  {

  }
}
