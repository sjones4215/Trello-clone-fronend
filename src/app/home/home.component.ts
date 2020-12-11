import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardDialogComponent } from '../board-dialog/board-dialog.component';
import { Board } from '../models/board';
import { BoardService } from '../services/board.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  boards: Board[] = []
  constructor(private boardService: BoardService) {}

  ngOnInit() {
    this.boardService.allBoards().subscribe( data => {
      this.boards = data
    })
  }
}

