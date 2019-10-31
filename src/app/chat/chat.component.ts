import { Component, OnInit, Input } from '@angular/core';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  response:string;
  constructor(private chat:ChatService) 
  { 
  }
  ngOnInit() 
  {
    this.chat.currentSpeech.subscribe(data =>
      {
        this.response=data;
      })
  }

}
