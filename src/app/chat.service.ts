import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
export class Message {
  constructor(public content: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token=environment.dialogFlow.GithubBot;
  readonly client=new ApiAiClient({accessToken: this.token});

  conversation = new BehaviorSubject<Message[]>([]);
  constructor() { }
  speech:any;
  sendRequest(requestText:string)
  {
    this.client.textRequest(requestText).then((res: any)=>
      {
        const speech=res.result.fulfillment.speech;
        //console.log(this.speech);
        const botMessage = new Message(speech);
        this.update(botMessage);
      });
  }
  getResponse()
  {
    return this.speech;
  }

    // Adds message to source
    update(msg: Message) {
      this.conversation.next([msg]);
    }
}
