import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerForm = new FormGroup({
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    userName: new FormControl<string>(''),
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
    confirmPassword: new FormControl<string>('')
  })

  submitApplication() {
    console.log(
      `
      firstName: ${this.registerForm.value.firstName ?? ''}\n
      lastName: ${this.registerForm.value.lastName ?? ''}\n
      userName: ${this.registerForm.value.userName ?? ''}\n
      email: ${this.registerForm.value.email ?? ''}\n
      password: ${this.registerForm.value.password ?? ''}\n
      confirmPassword: ${this.registerForm.value.confirmPassword ?? ''}\n
      `
    );
  }
}
