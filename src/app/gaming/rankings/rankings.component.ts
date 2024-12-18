import { Component, OnInit } from '@angular/core';
import { IUser } from '../../users/user';
import { NgFor } from '@angular/common';
import { GamingService } from '../gaming.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../users/user.service';
import { SortUsersPipe } from '../../shared/sort';
import { SharedService } from '../../shared/shared.service';
import { Prize } from '../../admin/prize';

@Component({
  selector: 'app-rankings',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rankings.component.html',
  styleUrl: './rankings.component.scss'
})
export class RankingsComponent implements OnInit {
  totalPrize: Prize = new Prize(0, true, 'Dec 2024');
  highscoreUsers: IUser[] = [];
  sortDirection: { [key: string]: boolean } = { 
    username: true, 
    score: true, 
    loginCounter: true, 
    total: true 
  };
  activityUsers: IUser[] | undefined;
  errorMessage: string = '';
  constructor(private http: HttpClient, private router: Router, private userService: UserService, private sharedService: SharedService, private gamingService: GamingService ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: result => {
        if(result.users)
        {
          this.highscoreUsers = result.users;
          this.highscoreUsers.forEach(user => {
            user.total = user.score! + user.loginCounter!;
          });
        }
      },
      error: err => this.errorMessage = err
    });

    this.gamingService.getCurrentPrize().subscribe({
      next: result => {
        if(result.prize)
        {
          this.totalPrize.isActive = result.prize.isActive;
          this.totalPrize.month = result.prize.month;
          this.totalPrize.value = result.prize.value;
        }
      }
    })
  }

  sortData(column: keyof IUser) { 
    this.sortDirection[column] = !this.sortDirection[column]; 
    const direction = this.sortDirection[column] ? 1 : -1; 
    this.highscoreUsers.sort((a, b) => { 
      if (a[column]! < b[column]!) { 
        return -1 * direction; 
      } else if (a[column]! > b[column]!) { 
        return 1 * direction; 
      } else { 
        return 0; 
      } 
    }); 
  }
}
