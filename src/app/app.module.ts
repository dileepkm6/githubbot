import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRepoComponent } from './create-repo/create-repo.component';
import { GetRepoComponent } from './get-repo/get-repo.component';
import { DeleteRepoComponent } from './delete-repo/delete-repo.component';
import {GithubservicesService} from './githubservices.service';
import {HttpClientModule} from '@angular/common/http';
import {ChatService} from './chat.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateRepoComponent,
    GetRepoComponent,
    DeleteRepoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubservicesService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
