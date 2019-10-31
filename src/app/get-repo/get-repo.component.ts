import { Component, OnInit } from '@angular/core';
import {GithubservicesService} from '../githubservices.service';

@Component({
  selector: 'app-get-repo',
  templateUrl: './get-repo.component.html',
  styleUrls: ['./get-repo.component.css']
})
export class GetRepoComponent implements OnInit {

  constructor(private _gservice:GithubservicesService) {
    this._gservice.getAllRepo().subscribe(data=>
      {
        this.repoList=data;
        //console.log(data);
      })
   }
  public repoList:any;
  favRepoList: any;
  index:any=0;
  ngOnInit() {
      this._gservice.getFavRepo().subscribe((data :any) =>
        {
          //this.favRepoList=data;
          for(let d of data)
          {
            console.log(d.id);
            document.getElementById(d.repoName+d.id).style.color="rgb(0,0,0)";
          }
          this.index++;
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

 saveFavouriteRepo(id:any,repoName:string,discription:string)
 {
  
  var button = document.getElementById(repoName+id);
  var style = getComputedStyle(button);
    if(style['color']=="rgb(0, 0, 0)") //if green fav then make it white
    {
      document.getElementById(repoName+id).style.color="rgb(255,255,255)";
      this._gservice.deleteRepoFromDataBase(id).subscribe(data =>
        {console.log(data)});
    }
    else //if(style['color']=="rgb(255, 255, 255)") //make favourite
    {
      document.getElementById(repoName+id).style.color="rgb(0,0,0)";
      this._gservice.saveRepo(id,repoName,discription).subscribe(data =>
        {console.log(data)});
      
    }

 }
}
