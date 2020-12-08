import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class SidenavService {
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

    public toggle() {
      return this.sideNavToggleSubject.next(null);
    }
}
