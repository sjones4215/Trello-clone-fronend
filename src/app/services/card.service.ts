import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  newCard(card: Card) {
   return this.http.post( this.baseUrl + 'cards/create', card)
  }
}
