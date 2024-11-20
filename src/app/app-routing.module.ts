import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NewAccountComponent } from './components/new-account/new-account.component';

const routes: Routes = [
  {path:"client", component: ClientComponent, children:[
    {path:"", component: HomeComponent}
  ], canActivate:[AuthGuard]},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"/client", pathMatch: 'full'},
  {path:"create", component:NewAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
