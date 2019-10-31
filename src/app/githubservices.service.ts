import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
//0f48d668f0aa02ee70019a6dcf031f83d0bbfdfe
@Injectable({
  providedIn: 'root'
})
export class GithubservicesService {

  private _createUrl: string = 'https://api.github.com/user/repos';
  private _delUrl:string = 'https://api.github.com/repos/dileepkm666/';
  private _pullUrl:string = 'https://api.github.com/repos/owner/repo/pulls?';
  private _token:string = '?access_token=0f48d668f0aa02ee70019a6dcf031f83d0bbfdfe';
  private _getRepo = 'https://api.github.com/user/repos';

  constructor(private _http:HttpClient) { }
  public getAllRepo()
  {
    return this._http.get(this._getRepo+this._token);
  }

  public createRepo(repoName:string,description:string)
  {
      return this._http.post(this._createUrl+this._token,
        {
          "name": repoName,
          "description": description  ,
          "homepage": "https://github.com",
          "private": false,
          "has_issues": true,
          "has_projects": true,
          "has_wiki": true
        }
        ).pipe(
          retry(1),
          catchError(this.handleError)
        );
  }
      
  

  handleError(error) {
    let errorMessage = '';
    errorMessage='repo name already exist';
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  deleteRepo(repoName:any)
  {
     return this._http.delete(this._delUrl+repoName+this._token).pipe(retry(1)
     ,catchError(this.handleDelError)
     );
  }

  handleDelError(error)
  {
    let errorMessage = '';
    errorMessage="repo name doesn't exist";
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  saveRepo(id:any,repoName:string,discription:string)
  {
      return this._http.post('http://localhost:8080/api/v1/save',{
        "id":id,
        "repoName":repoName,
        "description": discription
      });
  }
  deleteRepoFromDataBase(repoId:Number)
  {
    return this._http.delete('http://localhost:8080/api/v1/delete/'+repoId);
  }
  getFavRepo()
  {
    return this._http.get('http://localhost:8080/api/v1/allRepo');
  }
}
