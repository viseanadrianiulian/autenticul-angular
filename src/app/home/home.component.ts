import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LiveEventComponent } from "../gaming/live-event/live-event.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LiveEventComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {} 
  
  navigateTo(path: string) { 
    this.router.navigate([path]); 
  }
}
