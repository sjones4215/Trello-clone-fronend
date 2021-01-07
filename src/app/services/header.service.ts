import { BoundElementProperty } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Board } from '../models/board';
import { BoardService } from './board.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  selectedBoard: BehaviorSubject<Board> = new BehaviorSubject(null)

constructor() {
  this.loadBoard()
}


saveBoard(board: Board) {
  localStorage.setItem('title', board.title)
  this.selectedBoard.next(board)
}

loadBoard() {
  const board = new Board
  board.title = localStorage.getItem('title')
  this.selectedBoard.next(board)
}

setHeaderToNull() {
  this.selectedBoard.next(null)
}


}
