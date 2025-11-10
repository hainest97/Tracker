import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../_models/user';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  user: User | null = null;

  registerForm = new FormGroup({
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    userName: new FormControl<string>(''),
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
    confirmPassword: new FormControl<string>('')
  })

  submitApplication() {
    this.user = {
      firstName: this.registerForm.value.firstName ?? '',
      lastName: this.registerForm.value.lastName ?? '',
      userName: this.registerForm.value.userName ?? '',
      email: this.registerForm.value.email ?? '',
      password: this.registerForm.value.password ?? ''

    }
    console.log(
      `
      firstName: ${this.user.firstName}\n
      lastName: ${this.user.lastName}\n
      userName: ${this.user.userName}\n
      email: ${this.user.email}\n
      password: ${this.user.password}\n
      `
    )
    // console.log(
    //   `
    //   firstName: ${this.registerForm.value.firstName ?? ''}\n
    //   lastName: ${this.registerForm.value.lastName ?? ''}\n
    //   userName: ${this.registerForm.value.userName ?? ''}\n
    //   email: ${this.registerForm.value.email ?? ''}\n
    //   password: ${this.registerForm.value.password ?? ''}\n
    //   confirmPassword: ${this.registerForm.value.confirmPassword ?? ''}\n
    //   `
    // );
  }
}
