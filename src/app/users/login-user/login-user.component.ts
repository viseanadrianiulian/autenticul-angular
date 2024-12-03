import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.scss'
})
export class LoginUserComponent {
  userCredentials: IUser = {
    loginCounter: 0
  };
  loginSuccess: boolean = false;

  constructor(private router: Router, private userService: UserService){};

  onSubmit() {
    console.log('Username:', this.userCredentials.username);
    console.log('Password:', this.userCredentials.password);
    this.userService.login(this.userCredentials).subscribe({
      next: response => {
        console.log(response.success);
        this.loginSuccess = response.success;
        if(this.loginSuccess === true)
        {
          this.router.navigate(['../../gaming/home']);
        }
      }
    })
  }
}

