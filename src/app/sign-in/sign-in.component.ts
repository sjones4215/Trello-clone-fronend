import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from '../models/new-user';
import { User } from '../models/user';
import { LocalStorageService } from '../services/local-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private userService: UserService, private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    const newUser = new NewUser(this.formGroup.value)
    this.userService.signIn(newUser).subscribe((data: User) => {
    this.localStorageService.saveUser(data)
    if(data) {
      this.router.navigate([''])
      }
    })
  }

}
