import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';

const routes: Routes = [
  {path:"home", component:HomeComponent, 
    children:[
      {path:"tablero", component:DashboardComponent},
      {path:"servicios", component:ServiciosComponent},
      {path:"quienes-somos", component:QuienesSomosComponent},
    ]},
  {path:"login", component:LoginComponent},
  {path:"", redirectTo: "home/servicios"}
]; 

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }