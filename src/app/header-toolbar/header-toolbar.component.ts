import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardDialogComponent } from '../board-dialog/board-dialog.component';


@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }



  ngOnInit(): void {
    
  }

  openDialog() {
    const dialogRef = this.matDialog.open(BoardDialogComponent, {
      width: '250px',
      backdropClass:'cdk-overlay-transparent-backdrop',
      position: {
        top: '48px',
        left: '0px'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    }
  }


