import { Component, OnInit } from '@angular/core';
import { IUser } from '../../users/user';
import { NgFor } from '@angular/common';
import { GamingService } from '../gaming.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../users/user.service';
import { SortUsersPipe } from '../../shared/sort';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-rankings',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rankings.component.html',
  styleUrl: './rankings.component.scss'
})
export class RankingsComponent implements OnInit {

  highscoreUsers: IUser[] | undefined;
  activityUsers: IUser[] | undefined;
  errorMessage: string = '';
  constructor(private http: HttpClient, private router: Router, private userService: UserService, private sharedService: SharedService ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: result => {
        if(result.users)
        {
          this.highscoreUsers = this.sharedService.userSort( result.users, 'score');
          this.activityUsers = this.sharedService.userSort( result.users, 'loginCounter');
        }
      },
      error: err => this.errorMessage = err
    });
  }
}
