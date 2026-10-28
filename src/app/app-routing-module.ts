import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { LoginComponent } from './components/login-component/login-component';

const routes: Routes = [
  { path: "", component: SubordinadosComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
