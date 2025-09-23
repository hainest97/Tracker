import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm = new FormGroup({
    userName: new FormControl<string>(''),
    password: new FormControl<string>('')
  });

  submitApplication() {
    console.log(
      `
      userName: ${this.loginForm.value.userName ?? ''}\n
      password: ${this.loginForm.value.password ?? ''}\n
      `
    );
  }
}
