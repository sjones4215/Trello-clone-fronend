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
import { MatDialogModule } from '@angular/material/dialog';
import { BoardDialogComponent } from './board-dialog/board-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { BoardPageComponent } from './board-page/board-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewBoardDialogComponent } from './new-board-dialog/new-board-dialog.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SignOutDialogComponent } from './sign-out-dialog/sign-out-dialog.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddListDialogComponent } from './add-list-dialog/add-list-dialog.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CardDialogComponent } from './card-dialog/card-dialog.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderToolbarComponent,
    BoardDialogComponent,
    SignInComponent,
    BoardPageComponent,
    SignUpComponent,
    NewBoardDialogComponent,
    UserPageComponent,
    SignOutDialogComponent,
    SpinnerOverlayComponent,
    AddListDialogComponent,
    CardDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatSidenavModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
