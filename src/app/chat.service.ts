import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token=environment.dialogFlow.GithubBot;
  readonly client=new ApiAiClient({accessToken: this.token});
  //private subject=new Subject<any>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ();

  constructor() { }
  //speech:any;
  speechSource = new BehaviorSubject('');
  currentSpeech = this.speechSource.asObservable();
  speech:any;
  sendRequest(text:string)
  {
    this.client.textRequest(text)
      .then(data => {
        this.speech = data.result.fulfillment.speech;
        console.log(this.speech);
        this.speechSource.next(this.speech);
         });
  }
}
