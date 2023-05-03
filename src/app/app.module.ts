import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule  , PagesModule, AppRoutingModule , AuthModule],
  declarations: [ AppComponent, HelloComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
