import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-sign-out-dialog',
  templateUrl: './sign-out-dialog.component.html',
  styleUrls: ['./sign-out-dialog.component.scss']
})
export class SignOutDialogComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    public dialogRef: MatDialogRef<SignOutDialogComponent>
  ) { }

  ngOnInit(): void {
  }


  logOut() {
    this.localStorageService.logoutUser()
    this.router.navigate(['/sign-in'])
    this.dialogRef.close()
  }


}
