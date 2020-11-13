import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SucessComponent } from './sucess/sucess.component';
import { ResolverComponent } from './resolver/resolver.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', redirectTo: '/instructions', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'success', component: SucessComponent},
  {path: 'resolver', component: ResolverComponent},
  {path: 'instructions', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
