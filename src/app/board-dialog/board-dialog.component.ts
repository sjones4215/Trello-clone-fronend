import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from '../models/board';
import { BoardService } from '../services/board.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-board-dialog',
  templateUrl: './board-dialog.component.html',
  styleUrls: ['./board-dialog.component.scss']
})
export class BoardDialogComponent implements OnInit {
  board: Board
  boards: Board[] = []
  message: string = ""
  constructor(
    private boardService: BoardService,
    private router: Router,
    private headerService: HeaderService
    ) { }

   async ngOnInit() {
    await this.boardService.allBoards().subscribe(data => {
      if (data) {
        this.boards = data.boards.map(x => Object.assign(new Board(), x))
        console.log(data)
        if(this.boards.length === 0) {
          this.message = "There are no boards here yet. Add some to see them here."
        }
      }
    })
  }

  boardProfile(board: Board) {
    this.headerService.setHeaderToNull()
    this.headerService.saveBoard(board)
    this.router.navigate(['board-page/' + board.id])
  }
}
