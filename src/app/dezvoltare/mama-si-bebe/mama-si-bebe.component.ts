import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'app-mama-si-bebe',
  standalone: true,
  imports: [],
  templateUrl: './mama-si-bebe.component.html',
  styleUrl: './mama-si-bebe.component.scss'
})
export class MamaSiBebeComponent implements OnInit {
  constructor(private router: Router, private seo: SeoService) {}

  ngOnInit() {
    this.seo.set({
      title: 'Mama și bebe — informații verificate pe etape',
      description: 'Ghid structurat: înainte de sarcină, trimestrul 1-3, nou-născut, sugar. Informații verificate, clare și utile.',
      keywords: ['mama', 'bebe', 'sarcină', 'nou-născut', 'sugar'],
      canonical: 'https://autenticul.ro/dezvoltare/mama-si-bebe'
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
