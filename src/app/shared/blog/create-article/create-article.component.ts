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
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  article: Article = {
    title: '',
    description: '',
    imagePath: '',
    content: '',
    categoryId: '',
    slug: '',
    summary: '',
    tags: []
  };

  categories: Category[] = [];
  tagsInput: string = '';

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getCategories().subscribe({
      next: (data) => {
        this.categories = data.categories;
      },
      error: (error) => {
        console.error('Eroare la obținerea categoriilor:', error);
      }
    });
  }

  addTag() {
    if (this.tagsInput.trim()) {
      this.article.tags?.push(this.tagsInput.trim());
      this.tagsInput = '';
    }
  }

  removeTag(index: number) {
    this.article.tags?.splice(index, 1);
  }

  onSubmit() {
    // Dacă slug-ul nu e completat, îl generăm automat din titlu
    if (!this.article.slug) {
      this.article.slug = this.generateSlug(this.article.title);
    }

    this.blogService.createArticle(this.article).subscribe({
      next: (response) => {
        console.log('Articol adăugat:', response);
      },
      error: (error) => {
        console.error('Eroare la adăugarea articolului:', error);
      }
    });
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')   // elimină caractere speciale
      .trim()
      .replace(/\s+/g, '-')           // înlocuiește spațiile cu "-"
      .replace(/-+/g, '-');           // elimină multiple "-"
  }
}
