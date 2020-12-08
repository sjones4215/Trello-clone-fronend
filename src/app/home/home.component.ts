import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sideNavService: SidenavService) {
  }

  ngOnInit() {
  }
}
