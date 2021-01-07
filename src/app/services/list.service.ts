import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { environment } from 'src/environments/environment';
import { List } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  baseUrl: string = environment.baseUrl
  constructor(
    private http: HttpClient
  ) { }


  createList(list: List) {
    return this.http.post( this.baseUrl + "lists/create", list)
  }
}
