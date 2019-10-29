import { Component, OnInit } from '@angular/core';
import {GithubservicesService} from '../githubservices.service';

@Component({
  selector: 'app-pull-repo',
  templateUrl: './pull-repo.component.html',
  styleUrls: ['./pull-repo.component.css']
})
export class PullRepoComponent implements OnInit {

  constructor(private gitservice:GithubservicesService ) { }

  ngOnInit() {

  }
 
}
