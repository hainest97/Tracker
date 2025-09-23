import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  imports: [ReactiveFormsModule],
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css',
})
export class Addstudent {
  addStudentForm = new FormGroup({
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    major: new FormControl<string>(''),
    dob: new FormControl<Date | null >(null)
  });

  submitApplication() {
    console.log(
      `
      firstName: ${this.addStudentForm.value.firstName ?? ''}\n
      lastName: ${this.addStudentForm.value.lastName ?? ''}\n
      major: ${this.addStudentForm.value.major ?? ''}\n
      email: ${this.addStudentForm.value.dob ?? ''}\n
      `
    );
  }
}
