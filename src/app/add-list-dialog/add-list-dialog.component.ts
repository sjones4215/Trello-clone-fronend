import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardPageComponent } from '../board-page/board-page.component';
import { List } from '../models/list';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-list-dialog',
  templateUrl: './add-list-dialog.component.html',
  styleUrls: ['./add-list-dialog.component.scss']
})
export class AddListDialogComponent implements OnInit {
  newList: List = new List();
  boardId: number
  constructor(
    private listService: ListService,
    private dialogRef: MatDialogRef<BoardPageComponent>, @Inject(MAT_DIALOG_DATA)data)
    {
      this.boardId = data.id
    }


  ngOnInit(): void {
  }

  createList() {
    this.newList.board_id = this.boardId
    this.listService.createList(this.newList).subscribe(data => {
      if(data) {
        window.location.reload()
        console.log(data)
      }
    })
  }
}
