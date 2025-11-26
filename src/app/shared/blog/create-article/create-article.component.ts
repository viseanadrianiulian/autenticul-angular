import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../blog.service';
import { Article } from '../article';
import { Category } from '../category';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss'
})
export class CreateArticleComponent implements OnInit{
  article: Article = {
    title: '',
    description: '',
    imagePath: '',
    content: '',
    categoryId: ''
  };
  categories: Category[] = [];

  constructor(private blogService: BlogService){}

  ngOnInit() {
    this.blogService.getCategories().subscribe(
      {
        next: (data) => {
          this.categories = data.categories;
        },
      error: (error) => {
        console.error('Eroare la obținerea categoriilor:', error);
      }
    });
  }

  onSubmit() {
    this.blogService.createArticle(this.article).subscribe(
      response => {
        console.log('Articol adăugat:', response);
      },
      error => {
        console.error('Eroare la adăugarea articolului:', error);
      }
    );
  }
}
