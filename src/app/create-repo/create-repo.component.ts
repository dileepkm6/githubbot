import { Component, OnInit } from '@angular/core';
import {GithubservicesService} from '../githubservices.service';

@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.css']
})
export class CreateRepoComponent implements OnInit {

  constructor(private _gitSer:GithubservicesService) { }

  ngOnInit() {
  }
  createRepo(repoName:string,description:string)
  {
    this._gitSer.createRepo(repoName,description).subscribe(data=>
      {
        console.log(data);
      });
  }
}
