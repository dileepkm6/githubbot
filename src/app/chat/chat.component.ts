import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private chat:ChatService,private router:Router) { }
  response:string;
  ngOnInit() 
  {
    this.chat.getResponse().subscribe(data =>
      {
        this.response=data.content;
        console.log(this.response);
      })
  }

}
