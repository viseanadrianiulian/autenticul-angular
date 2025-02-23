import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mama-si-bebe',
  standalone: true,
  imports: [],
  templateUrl: './mama-si-bebe.component.html',
  styleUrl: './mama-si-bebe.component.scss'
})
export class MamaSiBebeComponent {
    constructor(private router: Router) {} 

  navigateTo(path: string) { 
    this.router.navigate([path]); 
  }
}
