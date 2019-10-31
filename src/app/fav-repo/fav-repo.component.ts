import { Component, OnInit } from '@angular/core';
import {GithubservicesService} from '../githubservices.service';

@Component({
  selector: 'app-fav-repo',
  templateUrl: './fav-repo.component.html',
  styleUrls: ['./fav-repo.component.css']
})
export class FavRepoComponent implements OnInit {

  favRepoList:any;
  constructor(private gitService:GithubservicesService) 
  {}

  ngOnInit() {
    this.gitService.getFavRepo().subscribe(data =>
      {
        this.favRepoList=data;
        console.log(data);
      })
  }
 removeFromFav(repoId:Number,repoName:string)
 {
  this.gitService.deleteRepoFromDataBase(repoId).subscribe(data =>
    {console.log(data)});
   document.getElementById(repoName).style.display="none";
 }
}
