import { Component, OnInit } from '@angular/core';
import { Streamer } from '../streamer';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-streamer-details',
  standalone: true,
  imports: [],
  templateUrl: './streamer-details.component.html',
  styleUrl: './streamer-details.component.scss'
})
export class StreamerDetailsComponent implements OnInit{
  streamer: Streamer | undefined;
  errorMessage : string = '';

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getStreamerDetails().subscribe({
      next: result => {
        if(result.success){
          this.streamer = result.streamerDetails;
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
    this.userService.logout();
    this.authService.setUsername('');
    this.router.navigate(['../../']);
  }
}
