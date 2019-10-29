import { Component, OnInit } from '@angular/core';
import {GithubservicesService} from '../githubservices.service';
import {
  MatSnackBar,
  MatButtonModule
} from '@angular/material';

@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.css']
})
export class CreateRepoComponent implements OnInit {

  constructor(private _gitSer:GithubservicesService,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  createRepo(repoName:string,description:string)
  {
    this._gitSer.createRepo(repoName,description).subscribe(data=>
      {
        this.snackBar.open(repoName+" successfully created","ok",{duration: 2000});
        console.log(data);
      });

    
  }
}
