import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Board } from '../models/board';
import {take} from 'rxjs/operators';
import { BoardService } from '../services/board.service';


@Component({
  selector: 'app-new-board-dialog',
  templateUrl: './new-board-dialog.component.html',
  styleUrls: ['./new-board-dialog.component.scss']
})
export class NewBoardDialogComponent implements OnInit {
newBoard: Board = new Board();

constructor(
  private _ngZone: NgZone,
  private boardService: BoardService
  ) { }

@ViewChild('autosize') autosize: CdkTextareaAutosize;

ngOnInit(): void {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

createBoard() {
  this.boardService.newBoard(this.newBoard).subscribe(data => {
    if (data) {
      console.log(data)
    }
    window.location.reload()
  })
}



}
