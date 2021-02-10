import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardPageComponent } from '../board-page/board-page.component';
import { Card } from '../models/card';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {
  card: Card
  constructor(
    private cardService: CardService,
    private dialogRef: MatDialogRef<BoardPageComponent>, @Inject(MAT_DIALOG_DATA)data)
    {
      this.card = data.card
    }

  ngOnInit(): void {
    console.log(this.card)
  }

}
