import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Register } from './register/register';
import { Addstudent } from './addstudent/addstudent';
import { Login } from './login/login';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home',
  },
  {
    path: 'register',
    component: Register,
    title: 'Register',
  },
  {
    path: 'login',
    component: Login,
    title: 'Login',
  },
  {
    path: 'addstudent',
    component: Addstudent,
    title: 'Add Student',
  },
];
