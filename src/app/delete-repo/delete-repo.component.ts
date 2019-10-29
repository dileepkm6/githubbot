import { Component, OnInit } from '@angular/core';
import {GithubservicesService} from '../githubservices.service';

@Component({
  selector: 'app-delete-repo',
  templateUrl: './delete-repo.component.html',
  styleUrls: ['./delete-repo.component.css']
})
export class DeleteRepoComponent implements OnInit {

  constructor(private _githubService:GithubservicesService) { }

  ngOnInit() {
  }
 deleteRepo(repoName:string)
 {
    this._githubService.deleteRepo(repoName).subscribe(data =>
      {
        console.log(data);
      })
 }
}
