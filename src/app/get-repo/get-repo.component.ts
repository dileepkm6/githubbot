import { Component, OnInit } from '@angular/core';
import {GithubservicesService} from '../githubservices.service';

@Component({
  selector: 'app-get-repo',
  templateUrl: './get-repo.component.html',
  styleUrls: ['./get-repo.component.css']
})
export class GetRepoComponent implements OnInit {

  constructor(private _gservice:GithubservicesService) { }
  public repoList:any;
  ngOnInit() {
    this._gservice.getAllRepo().subscribe(data=>
      {
        this.repoList=data;
        console.log(data);
      })
  }

 deleteRepo(repoName:string,id:any)
 {
   this._gservice.deleteRepo(repoName).subscribe(data =>{
     console.log(data);
   })
   this._gservice.deleteRepoFromDataBase(id).subscribe(data =>
    {console.log(data)});
   document.getElementById(repoName).style.display="none";
 }
 counts:any=0;
 saveFavouriteRepo(id:any,repoName:string,discription:string)
 {
   this.counts++;
    if(this.counts%2!=0)
    {
      document.getElementById(repoName+id).style.color="#002700";
      this._gservice.saveRepo(id,repoName,discription).subscribe(data =>
        {console.log(data)});
    }
    if(this.counts%2==0)
    {
      document.getElementById(repoName+id).style.color="white";
      this._gservice.deleteRepoFromDataBase(id).subscribe(data =>
        {console.log(data)});
    }
 }
}
