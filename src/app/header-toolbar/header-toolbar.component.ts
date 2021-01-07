
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardDialogComponent } from '../board-dialog/board-dialog.component';
import { BoardPageComponent } from '../board-page/board-page.component';
import { Board } from '../models/board';
import { BoardService } from '../services/board.service';
import { HeaderService } from '../services/header.service';
import { LocalStorageService } from '../services/local-storage.service';
import { SignOutDialogComponent } from '../sign-out-dialog/sign-out-dialog.component';


@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {
  loggedIn: boolean
  nickname: string
  board: Board

  constructor(
    public matDialog: MatDialog,
    private localStorageService: LocalStorageService,
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private boardService: BoardService,
    private headerService: HeaderService,
    ) {}



  ngOnInit(): void {
    // this.headerService.setHeaderToNull
    // this.headerService.selectedBoard.subscribe(data => {
    //   this.board = data
    //   this.headerService.selectedBoard.next(data)
    // })
    this.localStorageService.currentUser.subscribe(data => {
      if (data) {
        this.loggedIn = true
        this.nickname = data.nickname
      } else {
        this.loggedIn = false
      };
    })
  }

  openBoardDialog() {
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

  openLogoutDialog() {
      const dialogRef = this.dialog.open(SignOutDialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

headerTitle() {
  this.route.params.subscribe(params => {
    if(params.id) {
      this.boardService.getBoard(params.id).subscribe(data => {
        this.board = Object.assign(new Board(), data)
        console.log(data)
        })
      }
    })
  }

  setHeaderToNull() {
    this.headerService.setHeaderToNull()
  }


}



