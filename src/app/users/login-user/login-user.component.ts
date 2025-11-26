import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IUser } from '../user';
import { UserService } from '../user.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf, MatProgressSpinnerModule],
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent {
  userCredentials: IUser = {
    loginCounter: 0
  };
  loginSuccess: boolean = false;
  loading: boolean = false;

  constructor(private router: Router, private userService: UserService, private authService: AuthService){};

  onSubmit() {
    this.loading = true;
    console.log('Username:', this.userCredentials.username);
    console.log('Password:', this.userCredentials.password);
    this.userService.login(this.userCredentials).subscribe({
      next: response => {
        this.loading = false;
        console.log(response.success);
        this.loginSuccess = response.success;
        if(this.loginSuccess === true)
        {
          this.authService.setUsername(this.userCredentials.username!);
          this.router.navigate(['../../gaming/home']);
        }
      },
      error: err => {
        this.loading = false;
        console.error('Login failed', err);
      }
    });
  }
}
