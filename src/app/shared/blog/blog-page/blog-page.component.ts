import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../blog.service';
import { NgFor, NgStyle } from '@angular/common';
import { Article } from '../article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent implements OnInit {
  @Input() endpoint: string = '';
  articles: Article[] = [];

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.blogService.getArticles(this.endpoint).subscribe({
      next: (data) => {
        console.log('Data primită din backend:', data);
        this.articles = data.articles;
      
        console.log('Articole setate:', this.articles);
      },
      error: (error) => console.error('Eroare la încărcarea articolelor:', error)
    });
  }

  navigateTo(title: string) {
    const encodedTitle = encodeURIComponent(title);
    console.log('Navigating to:', `/mama-si-bebe/trimestrul1/article/${encodedTitle}`);
    this.router.navigate(['/dezvoltare/mama-si-bebe/trimestrul1/article', encodedTitle]);
  }
  
  
  
}
