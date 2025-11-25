import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutoriale',
  standalone: true,
  imports: [],
  templateUrl: './tutoriale.component.html',
  styleUrl: './tutoriale.component.scss'
})
export class TutorialeComponent {
    constructor(private router: Router) {} 

  navigateTo(path: string) { 
    this.router.navigate([path]); 
  }
}
