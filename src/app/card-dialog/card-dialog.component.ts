
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardPageComponent } from '../board-page/board-page.component';
import { Card } from '../models/card';
import { Comment } from '../models/comment';
import { CardService } from '../services/card.service';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {
  card: Card
  comments: Comment[] = []
  newComment: Comment = new Comment();
  constructor(
    private cardService: CardService,
    private commentService: CommentService,
    private dialogRef: MatDialogRef<BoardPageComponent>, @Inject(MAT_DIALOG_DATA)data )
    { this.card = data.card }

  ngOnInit(): void {
    debugger
    this.comments = this.card.comments
    console.log(this.card)
  }

   createComment() {
    this.newComment.card_id = this.card.id
    this.commentService.newComment(this.newComment).subscribe(data => {
      console.log(data)
    })
   }
}
