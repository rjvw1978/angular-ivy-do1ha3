import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AppRoutingModule } from '../app-routing.module';
import { IntegranteComponent } from './integrante/integrante.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, SharedModule
  ],
  declarations: [ServiciosComponent,QuienesSomosComponent, DashboardComponent, IntegranteComponent, HomeComponent],
  exports:[ServiciosComponent,QuienesSomosComponent, DashboardComponent, IntegranteComponent]
})
export class PagesModule { }