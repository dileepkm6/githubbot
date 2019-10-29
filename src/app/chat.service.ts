import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token=environment.dialogFlow.GithubBot;
  readonly client=new ApiAiClient({accessToken: this.token});
  private subject=new Subject<any>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ();

  constructor() { }
  speech:any;
  sendRequest(requestText:string)
  {
    this.client.textRequest(requestText).then((res: any)=>
      {
        const speech=res.result.fulfillment.speech;
        //console.log(this.speech);
        this.subject.next({content:speech});
      });
  }
  getResponse()
  {
    return this.subject.asObservable();
  }

}
