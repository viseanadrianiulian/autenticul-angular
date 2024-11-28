import { Routes } from "@angular/router";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { LoginUserComponent } from "./login-user/login-user.component";
import { UserDetailsComponent } from "./user-details/user-details.component";


export const USER_ROUTES: Routes = [
  {
      path: 'register',
      component: RegisterUserComponent
  },
  {
      path: 'login',
      component: LoginUserComponent
  },
  {
      path: 'details',
      component: UserDetailsComponent
  }
];