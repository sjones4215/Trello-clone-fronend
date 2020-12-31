import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BoardDialogComponent } from '../board-dialog/board-dialog.component';
import { LocalStorageService } from '../services/local-storage.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {
  loggedIn: boolean
  nickname: string
  constructor(
    private matDialog: MatDialog,
    private localStorageService: LocalStorageService,
    private router: Router) { }



  ngOnInit(): void {
    this.localStorageService.currentUser.subscribe(data => {
      if (data) {
        this.loggedIn = true
        this.nickname = data.nickname
      } else {
        this.loggedIn = false
      }
    })
  }

  openDialog() {
    const dialogRef = this.matDialog.open(BoardDialogComponent, {
      width: '250px',
      backdropClass:'cdk-overlay-transparent-backdrop',
      position: {
        top: '48px',
        left: '0px'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    }

  logOut() {
    this.localStorageService.logoutUser()
    this.router.navigate(['/sign-in'])
  }


  }


