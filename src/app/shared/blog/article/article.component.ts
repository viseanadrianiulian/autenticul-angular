import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../blog.service';
import { Article } from '../article';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgStyle, NgIf],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article!: Article;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit(): void {
    const articleTitle = this.route.snapshot.paramMap.get('title'); // Obține titlul articolului din URL fără a decoda
    this.blogService.getArticleByTitle(decodeURIComponent(articleTitle!)).subscribe({
      next: (data) => {
        console.log('Datele articolului primite din backend:', data);
        this.article = data.article;
      },
      error: (error) => console.error('Eroare la încărcarea articolului:', error)
    });
  }
}
