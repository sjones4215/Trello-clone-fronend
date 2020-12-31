import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from '../models/board';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-board-dialog',
  templateUrl: './board-dialog.component.html',
  styleUrls: ['./board-dialog.component.scss']
})
export class BoardDialogComponent implements OnInit {
  boards: Board[] = []
  constructor(
    private boardService: BoardService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.boardService.allBoards().subscribe(data => {
      if (data) {
        this.boards = data
      }
    })
  }

  boardProfile(board: Board) {
    this.router.navigate(['board-page/' + board.id])
  }

}
