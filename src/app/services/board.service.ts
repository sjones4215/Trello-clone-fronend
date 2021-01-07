import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Board } from '../models/board';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  baseUrl: string = environment.baseUrl
  currentUser: User
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.localStorageService.currentUser.subscribe(data => {
      this.currentUser = data
    })
  }

  getBoard(id: number):Observable<any> {
    return this.http.get<any>(this.baseUrl + 'boards/show?id=' + id)
  }

  allBoards(): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'boards/index')
  }

  newBoard(board: Board) {
    return this.http.post( this.baseUrl + 'boards/create', board)
  }
}
