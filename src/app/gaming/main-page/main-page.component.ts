import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../users/user.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
  export class MainPageComponent implements OnInit{

    constructor(private router: Router, private userService:UserService){};

    ngOnInit(): void {
      console.log(this.userService.isLoggedIn())
      if(!this.userService.isLoggedIn())
      {
        this.router.navigate(['/users/login']);
      }
    }

    onImageClick(selection: string) {
      console.log(`${selection} clicked`);
      // Aici poți adăuga logica pentru apelul metodei dorite
      if(selection === 'live')
      {
        this.router.navigate(['../../gaming/live']);
      }
      if(selection === 'rankings')
      {
        this.router.navigate(['../../gaming/rankings']);
      }
  }
}