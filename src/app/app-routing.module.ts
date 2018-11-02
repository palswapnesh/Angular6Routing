import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{DashBoardComponent} from './dash-board/dash-board.component';
import{RegisterComponent} from './register/register.component';
import{LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Register', component: RegisterComponent },
  { path: 'DashBoard', component: DashBoardComponent },
  { path: 'Login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {

  
 }
