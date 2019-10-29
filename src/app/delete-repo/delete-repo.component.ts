import { Component, OnInit } from '@angular/core';
import {GithubservicesService} from '../githubservices.service';
import {
  MatSnackBar,
  MatButtonModule
} from '@angular/material';

@Component({
  selector: 'app-delete-repo',
  templateUrl: './delete-repo.component.html',
  styleUrls: ['./delete-repo.component.css']
})
export class DeleteRepoComponent implements OnInit {

  constructor(private _githubService:GithubservicesService,public snachBar:MatSnackBar) { }

  ngOnInit() {
  }
 deleteRepo(repoName:string)
 {
    this._githubService.deleteRepo(repoName).subscribe(data =>
      {
        this.snachBar.open(repoName+" successfully deleted","ok",{duration:2000});
        console.log(data);
      })
 }
}
