import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [HeaderComponent, NavComponent,FooterComponent],
  exports:[HeaderComponent,NavComponent, FooterComponent]
  
})
export class SharedModule { }