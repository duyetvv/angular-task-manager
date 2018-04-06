import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { HomeComponent } from '../components/home/home.component';

export const HOME = {
  path: 'home',
  component: HomeComponent
}

export const DASHBOARD = {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}

export const LOGIN = {
  path: 'login',
  component: LoginComponent
}

export const SIGNUP = {
  path: 'signup',
  component: SignupComponent
}
