
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component'

export const AppRoutes = [
  {path:'login',component: LoginComponent},
  {path:'', component:WelcomeComponent}
];