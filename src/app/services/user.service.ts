import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUser } from '../models/new-user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  signIn(user: NewUser) {
    return this.http.post( this.baseUrl + 'users/login', user)
  }

  signOut(id: number) {
    return this.http.delete( this.baseUrl + 'user/logout?id=')
  }
}
