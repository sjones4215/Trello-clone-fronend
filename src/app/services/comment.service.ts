import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl: string = environment.baseUrl
  constructor(
    private http: HttpClient
  ) { }

  newComment(comment: Comment) {
    return this.http.post( this.baseUrl + 'comments/create', comment)
  }
}
