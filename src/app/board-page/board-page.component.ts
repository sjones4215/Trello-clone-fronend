import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { AddListDialogComponent } from '../add-list-dialog/add-list-dialog.component';
import { Board } from '../models/board';
import { Card,} from '../models/card';
import { List } from '../models/list';
import { BoardService } from '../services/board.service';
import { CardService } from '../services/card.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  board: Board
  lists: List[] = []
  list: List
  cards: Card[] = []
  panelOpenState = false;
  newCard: Card = new Card();
  constructor(
    private boardService: BoardService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private _ngZone: NgZone,
    private cardService: CardService,
    ) { }

    @ViewChild('autosize') autosize: CdkTextareaAutosize;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id) {
        this.boardService.getBoard(params.id).subscribe(data => {
          this.board = Object.assign(new Board(), data)
          this.lists = this.board.lists
          this.lists.forEach(data => {
          this.list = Object.assign(new List(), data)
          console.log(data)
          })
        })
      }
    })
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  addListDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: this.board.id
    }

    const dialogRef = this.dialog.open(AddListDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  createCard(id: number) {
    this.newCard.list_id = id
    this.cardService.newCard(this.newCard).subscribe(data => {
      if(data) {
        window.location.reload()
        console.log(data)
      }
    })
  }


}
