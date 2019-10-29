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
  }
 getRepo()
 {
  this._gservice.getAllRepo().subscribe(data=>
    {
      this.repoList=data;
      console.log(data);
    })
 }
 deleteRepo(repoName:string)
 {
   this._gservice.deleteRepo(repoName).subscribe(data =>{
     console.log(data);
   })
   document.getElementById(repoName).style.display="none";
 }
}
