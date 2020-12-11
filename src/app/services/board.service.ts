import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  allBoards(): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'boards/index')
  }
}
