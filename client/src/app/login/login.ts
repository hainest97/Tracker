import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../_models/user';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  user: User | null = null;
  
  loginForm = new FormGroup({
    userName: new FormControl<string>(''),
    password: new FormControl<string>('')
  });

  submitApplication() {
    this.user = {
      firstName: '',
      lastName: '',
      userName: this.loginForm.value.userName ?? '',
      email: '',
      password: this.loginForm.value.password ?? ''

    }
    console.log(
      `
      userName: ${this.user.userName ?? ''}\n
      password: ${this.user.password ?? ''}\n
      `
    );
    // console.log(
    //   `
    //   userName: ${this.loginForm.value.userName ?? ''}\n
    //   password: ${this.loginForm.value.password ?? ''}\n
    //   `
    // );
  }
}
