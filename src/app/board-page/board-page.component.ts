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
import {CdkDrag, CdkDragDrop, CdkDragEnd, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ListService } from '../services/list.service';


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
  card: Card
  message: string = ""
  cardTest: string
  constructor(
    private boardService: BoardService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private _ngZone: NgZone,
    private cardService: CardService,
    private listService: ListService,
    ) { }

    @ViewChild('autosize') autosize: CdkTextareaAutosize;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id) {
        this.boardService.getBoard(params.id).subscribe(data => {
          this.board = Object.assign(new Board(), data)
          this.lists = this.board.lists
          if(this.lists.length === 0) {
            this.message = "Add a list located on the toolbar to get started."
          }
          this.lists.forEach(data => {
          this.list = Object.assign(new List(), data)
          console.log(this.list)
          })
          this.list.cards.forEach(data => {
            this.card = Object.assign(new Card(), data)
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

  dropItem(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
      event.container.data.forEach(data => {
        this.card = Object.assign(new Card(), data)
        if (this.card.list_id.toString() !== event.container.id) {
          var x = event.container.id;
          var y = +x;
          this.card.list_id = y
          this.cardService.updateCard(this.card).subscribe(data => {
            if(data) {
              console.log(this.card.list_id)
            }
          })
        }
          var x = event.container.id;
          var y = +x;
          this.list.id = y
          this.list.cards = event.container.data
          console.log(this.list.cards)
          this.listService.updateList(this.list).subscribe()
      })
    }


  getConnectedList(): any[] {
    return this.lists.map(x => `${x.id}`);
  }


}



