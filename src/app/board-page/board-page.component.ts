import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { AddListDialogComponent } from '../add-list-dialog/add-list-dialog.component';
import { Board } from '../models/board';
import { Card,} from '../models/card';
import { List } from '../models/list';
import { BoardService } from '../services/board.service';
import { CardService } from '../services/card.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';


@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  board: Board
  createdCard: Observable<Card>
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
          })
          this.list.cards.forEach(data => {
            this.card = Object.assign(new Card(), data)
          })
        })
      }
    })
  }

  triggerResize() {
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

  dropItem(event: CdkDragDrop<Card[]>) {
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
        event.previousContainer.data.forEach((x,index)=>{
          x.order_number = index
      })
    }
      event.container.data.forEach((x,index)=>{
          x.order_number = index
          var u = event.container.id;
          var y = +u;
          x.list_id = y
          console.log(x.list_id)
          this.cardService.updateCard(x).subscribe()
      })
    }


  getConnectedList(): any[] {
    return this.lists.map(x => `${x.id}`);
  }

  cardDialog(card: Card) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      card: card
    }

    const dialogRef = this.dialog.open(CardDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}



