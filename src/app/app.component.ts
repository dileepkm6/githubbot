import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ChatService} from './chat.service';
import { Observable } from 'rxjs/internal/Observable';;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,private chatService:ChatService){}
  response:string;
  ngOnInit(){
    this.chatService.getResponse().subscribe(data =>
      {
        this.response=data.content;
        if(this.response=="create")
    {
      this.router.navigateByUrl('/create-repo');
    }
    else if(this.response=="delete")
    {
      this.router.navigateByUrl('/delete-repo');
    }
    else if(this.response=="allRepo")
    {
      this.router.navigateByUrl('/get-repo');
    }
    else
    {
      this.router.navigateByUrl('/chat');
    }

      });
  }
  title = 'githubbot';
  statement:string;
  sendRequest()
  {
    this.chatService.sendRequest(this.statement);
    console.log(this.response);
    
    
  }
}
