import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventDto } from '../event';
import { GamingService } from '../gaming.service';
import { Bet } from '../bet';
import { NgIf } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-live-event',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './live-event.component.html',
  styleUrl: './live-event.component.scss'
})
export class LiveEventComponent implements OnInit {
  event: EventDto | undefined;
  bet: Bet = new Bet();
  errorMessage: string = '';
  betPlaced: boolean = false;
  isAdmin: boolean = false;

  constructor(private http: HttpClient, private router: Router, private gamingService: GamingService) { }

  ngOnInit(): void {
    this.gamingService.getLiveEvent().subscribe({
      next: result => {
        this.event = result.liveEvent;
        if(result.userBet)
          this.bet = result.userBet;
        this.betPlaced = result.userBet!=null? true:false;
        console.log('BET PLACED: ', this.betPlaced);
        this.isAdmin = result.isAdmin;
        var errMsg = localStorage.getItem('submitBetErrorMessage');
        if(errMsg != null){
          this.errorMessage = errMsg;
          localStorage.removeItem('submitBetErrorMessage');
        }
      },
      error: err => this.errorMessage = err
    });
  }

  submitChoice(): void {
    console.log('Selected choice:', this.bet);
    this.bet.eventId = this.event?.id;
    this.gamingService.placeBet(this.bet).subscribe({
      next: response => {
        this.betPlaced = response.success;
        if(response.success === true) {
          
        }
        else
        {
          localStorage.setItem('submitBetErrorMessage', response.message);
        }
        window.location.reload();
      },
      error: err => this.errorMessage = err
    });
  }

  submitResult(): void {
    console.log('Selected choice:', this.bet);
    this.bet.eventId = this.event?.id;
    this.gamingService.saveEventResult(this.event!.id!, this.bet.choice!).subscribe({
      next: response => {
        this.betPlaced = response.success;
        if(response.success === true) {
          
        }
        else
        {
          this.errorMessage = response.message;
        }
        window.location.reload();
      },
      error: err => this.errorMessage = err
    });
  }

  stopBets(): void {
    console.log('Stop Bets');
    this.bet.eventId = this.event?.id;
    this.gamingService.stopBets(this.event!.id!).subscribe({
      next: response => {
        this.betPlaced = response.success;
        if(response.success === true) {
          
        }
        else
        {
          this.errorMessage = response.message;
        }
        window.location.reload();
      },
      error: err => this.errorMessage = err
    });
  }

  closeEvent(): void{
    console.log('Close Event');
    this.gamingService.closeEvent(this.event?.id!).subscribe({
      next: response => {
        if(response.success){
          this.router.navigate(['../../gaming/live']);
        }
      },
      error: err => this.errorMessage = err
    });
  }

  addEvent(): void{
    this.router.navigate(['../../gaming/add']);
  }

  refreshPage(): void{
    window.location.reload();
  }
}





