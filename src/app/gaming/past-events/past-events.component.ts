import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GamingService } from '../gaming.service';
import { Router } from '@angular/router';
import { EventDto } from '../event';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-past-events',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './past-events.component.html',
  styleUrl: './past-events.component.scss'
})
export class PastEventsComponent implements OnInit{

  pastEvents : EventDto[] = [];
  constructor(private http: HttpClient, private router: Router, private gamingService: GamingService){}

  ngOnInit(): void{
    this.gamingService.getPastEvents().subscribe({
      next: result => {
        if(result.success)
        {
          this.pastEvents = result.events;
        }
      }
    });
  }

  toggleDetails(event: EventDto) {
    event.showDetails = !event.showDetails;
  }

}
