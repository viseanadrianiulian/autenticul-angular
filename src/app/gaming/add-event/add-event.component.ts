
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventDto } from '../event';
import { FormsModule } from '@angular/forms';
import { GamingService } from '../gaming.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss'
})
export class AddEventComponent {
  eventToAdd: EventDto = { name: '', description: '', choice1: '', choice2: '', choice3: '', correctChoice: '', isActive: true, betsActive: true };
  addSuccess: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router, private gamingService: GamingService) { }

  onSubmit(): void {
    this.gamingService.addEvent(this.eventToAdd).subscribe({
      next : response => {
        console.log(response.success);
        this.addSuccess = response.success;
        if(this.addSuccess === true){
          this.router.navigate(['../../gaming/live']);
        }
      },
      error: err => this.errorMessage = err
    });
  }
}
