import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateRepoComponent} from './create-repo/create-repo.component';
import {DeleteRepoComponent} from './delete-repo/delete-repo.component';
import {GetRepoComponent} from './get-repo/get-repo.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  // { path: 'home', component: AppComponent },
  { path: 'create-repo', component: CreateRepoComponent },
  { path: 'delete-repo',      component: DeleteRepoComponent },
  { path: 'get-repo', component: GetRepoComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
