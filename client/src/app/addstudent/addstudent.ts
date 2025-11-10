import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Student } from '../_models/student';

@Component({
  selector: 'app-addstudent',
  imports: [ReactiveFormsModule],
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css',
})
export class Addstudent {
  student: Student | null = null;

  addStudentForm = new FormGroup({
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    major: new FormControl<string>(''),
    dob: new FormControl<Date | null >(null)
  });

  submitApplication() {
    this.student = {
      firstName: this.addStudentForm.value.firstName ?? '',
      lastName: this.addStudentForm.value.lastName ?? '',
      major: this.addStudentForm.value.major ?? '',
      dob: this.addStudentForm.value.dob ?? new Date(),
    }
    console.log(
      `
      firstName: ${this.student.firstName}\n
      lastName: ${this.student.lastName}\n
      major: ${this.student.major}\n
      date of birth: ${this.student.dob}\n
      `
    );
    // console.log(
    //   `
    //   firstName: ${this.addStudentForm.value.firstName ?? ''}\n
    //   lastName: ${this.addStudentForm.value.lastName ?? ''}\n
    //   major: ${this.addStudentForm.value.major ?? ''}\n
    //   date of birth: ${this.addStudentForm.value.dob ?? ''}\n
    //   `
    // );
  }
}
