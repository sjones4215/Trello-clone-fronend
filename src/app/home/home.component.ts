import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BoardDialogComponent } from '../board-dialog/board-dialog.component';
import { Board } from '../models/board';
import { NewBoardDialogComponent } from '../new-board-dialog/new-board-dialog.component';
import { BoardService } from '../services/board.service';
import { HeaderService } from '../services/header.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  boards: Board[] = []
  constructor(
    private boardService: BoardService,
    private router: Router,
    private headerService: HeaderService,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.boardService.allBoards().subscribe( data => {
      this.boards = data.boards.map(x => Object.assign(new Board(), x))
      console.log(data)
    })
  }

  boardProfile(board: Board) {
    this.router.navigate(['board-page/' + board.id])
  }

  setBoardTitle() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewBoardDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


