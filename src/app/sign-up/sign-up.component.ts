import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LocalStorageService } from '../services/local-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = true;

  formGroup = new FormGroup ({
    nickname: new FormControl('', Validators.required),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  constructor(private userService: UserService, private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }


  submitUser() {
    this.userService.signUp(this.formGroup.value).subscribe((data: User) => {
      this.localStorageService.saveUser(data);
      if (data) {
        this.router.navigate(['home'])
      }
    })
  }

}
