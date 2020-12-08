import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderToolbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
