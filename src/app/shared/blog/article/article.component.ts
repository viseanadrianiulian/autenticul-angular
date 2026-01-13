import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../blog.service';
import { Article } from '../article';
import { NgIf, NgStyle } from '@angular/common';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgStyle, NgIf],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article!: Article;
  isAdmin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private seo: SeoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const articleTitle = this.route.snapshot.paramMap.get('slug');
    if (!articleTitle) return;

    this.blogService.getArticleBySlug(decodeURIComponent(articleTitle)).subscribe({
      next: (data) => {
        this.article = data.article;
        this.isAdmin = data.isAdmin;

        this.seo.set({
          title: this.article.title,
          description: this.article.summary ?? this.article.content?.slice(0, 150) ?? '',
          keywords: this.article.tags ?? [],
          canonical: `https://autenticul.ro${location.pathname}`
        });
      },
      error: (error) => console.error('Eroare la încărcarea articolului:', error)
    });
  }

  editArticle() {
    this.router.navigate(['/blog/create-article', this.article.id]);
  }
}
