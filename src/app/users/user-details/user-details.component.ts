import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user';
import { UserResponse } from '../../shared/responses/user.response';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  user: IUser | undefined;
  errorMessage : string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe({
      next: result => {
        if(result.success){
          this.user = result.userDetails;
        }
        else
        {
          console.log('USER_DETAILS_ELSEEEEE');
        }
          
      },
      error: err => {
        this.errorMessage = err;
        console.log(this.errorMessage);
      }
    });
  }

  logout(): void{
    this.userService.logout()
    this.router.navigate(['../../']);
  }
}
