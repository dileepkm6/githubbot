import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ChatService} from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router,private chatService:ChatService){}
  title = 'githubbot';
  response:string;
  statement:string;
  sendRequest()
  {
    this.chatService.sendRequest(this.statement);
    this.response=this.chatService.getResponse();
    console.log(this.response);
  //   if(this.response=="create")
  //   {
  //     //this.router.navigateByUrl('/create-repo');
  //     console.log(this.response);
  //   }
  //   else if(this.response=="delete")
  //   {
  //     this.router.navigateByUrl('/delete-repo');
  //   }
  //   else if(this.response=="all repo")
  //   {
  //     this.router.navigateByUrl('/get-repo');
  //   }
  //   // else
  //   // {
  //   //   this.router.navigateByUrl('/home');
  //   // }

  }
}
