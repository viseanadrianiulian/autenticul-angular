import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbCollapse, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../users/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbNavModule, RouterLink, NgbCollapse],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed = false;
  username: string = '';

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const storedUsername = localStorage.getItem('username'); 
    if (storedUsername) { 
      this.username = storedUsername; 
      this.authService.setUsername(storedUsername); 
    }

    this.authService.username$.subscribe(username => {
      this.username = username;
    });
  }

  onProfileClick(): void {
    if (this.userService.isLoggedIn()) {
      if (this.userService.isStreamer()) {
        this.router.navigate(['../../users/streamer-details']);
      } else {
        this.router.navigate(['../../users/details']);
      }
    } else {
      this.router.navigate(['../../users/login']);
    }
  }
}

