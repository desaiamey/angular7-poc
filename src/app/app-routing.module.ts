import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './components/admin/admin.module#AdminModule'
  },
  {
    path: 'agent',
    loadChildren: './components/agent/agent.module#AgentModule'
  },
  {
    path: '',
    component: LoginComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
