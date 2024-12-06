import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IUser } from '../user';
import { UserService } from '../user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent {
  username: string = '';
  password: string = '';
  userCredentials: IUser = {
    loginCounter: 0
  };
  userCreated: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router, private userService: UserService){};

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.userService.register(this.userCredentials).subscribe({
      next: response => {
        console.log(response.success);
        this.userCreated = response.success;
        if(!this.userCreated)
        {
          this.errorMessage = response.message;
        }
        else
        { 
          this.router.navigate(['../../users/login']);
        }
      },
      error: err => {
        this.errorMessage = err
      }
    })
  }
}

