import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

  constructor(private sideNav: SidenavService) { }

  toggleActive: boolean = false;

  ngOnInit(): void {

  }

  clickMenu() {
    this.sideNav.toggle()
  }
}
