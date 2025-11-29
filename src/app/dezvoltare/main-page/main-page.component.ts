import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'dezvoltare-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  constructor(private router: Router, private seo: SeoService) {}

  ngOnInit() {
    this.seo.set({
      title: 'Dezvoltare — Ghiduri și resurse verificate',
      description: 'Dezvoltare personală și pentru familie. Ghiduri practice, resurse verificate și informații structurate pe etape.',
      keywords: ['dezvoltare', 'ghiduri', 'familie', 'resurse verificate'],
      canonical: 'https://autenticul.ro/dezvoltare'
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
