import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){}
  title = 'githubbot';
  getRepo(statement:string)
  {
    if(statement=="create")
    {
      this.router.navigateByUrl('/create-repo');
    }
    else if(statement=="delete")
    {
      this.router.navigateByUrl('/delete-repo');
    }
    else if(statement=="all repo")
    {
      this.router.navigateByUrl('/get-repo');
    }
    else
    {
      this.router.navigateByUrl('/home');
    }

  }
}
